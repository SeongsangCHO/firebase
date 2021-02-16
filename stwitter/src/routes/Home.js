import { dbService } from "fbase";
import { React, useState, useEffect } from "react";
import Sweet from "components/Sweet";

const Home = ({ userObj }) => {
  const [sweet, setSweet] = useState("");
  const [sweets, setSweets] = useState([]);

  useEffect(() => {
    dbService.collection("sweets").onSnapshot((snapshot) => {
      const sweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSweets(sweetArray);
    });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.collection("sweets").add({
      text: sweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setSweet("");
    console.log(sweet);
  };
  const onChange = (e) => {
    const { value } = e.target;
    setSweet(value);
  };
  
  const onFileChagne = (e) => {
    //e.target.files
    const files = e.target.files;
    const theFile = files[0];
    const reader = new FileReader();// file API
    reader.onloadend = (finishedEvent) => {
      console.log(finishedEvent);
    }; // when file onloaded. parameter has URL of the image
    reader.readAsDataURL(theFile);
  }

  return (
    <div>
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
      </form>
      <div>
        {sweets.map((sweet) => (
          <Sweet
            key={sweet.id}
            sweetObj={sweet}
            isOwner={sweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
