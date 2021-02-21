import { dbService, storageService } from "fbase";
import { React, useState, useEffect } from "react";
import Sweet from "components/Sweet";
import SweetFactory from "components/SweetFactory";
import styles from './Home.module.css';

const Home = ({ userObj }) => {
  const [sweets, setSweets] = useState([]);
  useEffect(() => {
    dbService.collection("sweets").onSnapshot((snapshot) => {
      let sweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })).sort((a, b) => b.createdAt - a.createdAt);
      setSweets(sweetArray);
    });
  }, []);

  return (
    <div className={styles.sweetContainer}>
      <SweetFactory userObj={userObj} />
      <div className={styles.sweetContent}>
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
