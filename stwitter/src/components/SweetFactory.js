import { React, useState } from "react";
import { dbService, storageService } from "fbase";
import { v4 as uuidv4 } from "uuid";
import styles from "./SweetFactory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const SweetFactory = ({ userObj }) => {
  const [sweet, setSweet] = useState("");
  const [attachment, setAttachment] = useState("");
  const [lettersCount, setLettersCount] = useState(0);

  const onSubmit = async (e) => {
    e.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const fileRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
      const response = await fileRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const sweetObject = {
      text: sweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
      displayName: userObj.displayName,
      photoURL: userObj.photoURL
    };
    await dbService.collection("sweets").add(sweetObject);
    setSweet("");
    setAttachment("");
    setLettersCount(0);
    document.getElementById("file-upload").value = "";
  };

  const onChange = (e) => {
    const { value } = e.target;
    setLettersCount(value.length);
    setSweet(value);
  };

  const onFileChagne = (e) => {
    //e.target.files
    const files = e.target.files;
    const theFile = files[0];
    const reader = new FileReader(); // file API
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent; //  result === finishedEvent.currentTarget.result
      setAttachment(result);
    }; // when file onloaded. parameter has URL of the image
    reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => {
    setAttachment("");
    document.getElementById("file-upload").value = "";
  };
  return (
    <form onSubmit={onSubmit} className={styles.sweetForm}>
      <input
        value={sweet}
        type="text"
        maxLength={120}
        placeholder="What's on your mind?"
        className={styles.sweetInput}
        required
        onChange={onChange}
      ></input>
      <div className={styles.sweetWriterWrapper}>
        <label htmlFor="file-upload" className={styles.TweetLabelStyle}>
          <FontAwesomeIcon className={styles.uploadIcon} icon={faImage} />
          Picture
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={onFileChagne}
          ></input>
        </label>

        <div className={styles.rightSide}>
          <span>{lettersCount}/120</span>
          <input
            className={styles.TweetBtnStyle}
            type="submit"
            value="Sweet"
          ></input>
        </div>
      </div>
      {attachment && (
        <div className={styles.imagePreviewContainer}>
          <FontAwesomeIcon
            id="uploadCancelBtn"
            className={styles.cancelBtn}
            onClick={onClearAttachment}
            icon={faTimesCircle}
          />

          <img src={attachment} width="125px" height="125px" />
        </div>
      )}
    </form>
  );
};

export default SweetFactory;
