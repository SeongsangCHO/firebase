import { React, useState } from "react";
import { dbService, storageService } from "fbase";
import { v4 as uuidv4 } from "uuid";

const SweetFactory = ({ userObj }) => {
  const [sweet, setSweet] = useState("");
  const [attachment, setAttachment] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    let attachmentUrl = "";
    if (attachment != "") {
      const fileRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
      const response = await fileRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const sweetObject = {
      text: sweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    };
    await dbService.collection("sweets").add(sweetObject);
    setSweet("");
    setAttachment("");
  };

  const onChange = (e) => {
    const { value } = e.target;
    setSweet(value);
  };

  const onFileChagne = (e) => {
    //e.target.files
    const files = e.target.files;
    const theFile = files[0];
    const reader = new FileReader(); // file API
    reader.onloadend = (finishedEvent) => {
      console.log(finishedEvent);
      const {
        currentTarget: { result },
      } = finishedEvent; //  result === finishedEvent.currentTarget.result

      setAttachment(result);
    }; // when file onloaded. parameter has URL of the image
    reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => setAttachment(null);
  return (
    <form onSubmit={onSubmit}>
      <input
        value={sweet}
        type="text"
        placeholder="What's on your mind?"
        maxLength={120}
        onChange={onChange}
      ></input>
      <input type="file" accept="image/*" onChange={onFileChagne}></input>
      <input type="submit" value="Switter"></input>
      {attachment && (
        <div>
          <img src={attachment} width="50px" height="50px" />
          <button onClick={onClearAttachment}>Cancel Upload</button>
        </div>
      )}
    </form>
  );
};

export default SweetFactory;