import { dbService, storageService } from "fbase";
import { React, useState, useEffect } from "react";
import Sweet from "components/Sweet";
import SweetFactory from "components/SweetFactory";

const Home = ({ userObj }) => {
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

  return (
    <div class="">
      <SweetFactory userObj={userObj} />
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
