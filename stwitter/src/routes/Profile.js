import { authService, dbService } from "fbase";
import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Profile.module.css";

const Profile = ({ userObj, refreshUser }) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  const getMySweets = async () => {
    //get user's all datas in collections
    const sweets = await dbService
      .collection("sweets")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createdAt", "asc") //정렬, => 인덱스생성
      .get();
  };
  useEffect(() => {
    document.querySelector('#editInput').focus();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
    }
    refreshUser();
  };
  const onChange = (e) => {
    const { value } = e.target;
    setNewDisplayName(value);
  };
  return (
    <div className={styles.profileEditContainer}>
      <span>Hello,{userObj.displayName}!</span>
      <form onSubmit={onSubmit}
      className={styles.profileEditForm}>
        <input
          id="editInput"
          onChange={onChange}
          type="text"
          maxLength={12}
          placeholder="Display Name"
          value={newDisplayName}
        />
        <input className={styles.TweetBtnStyle} type="submit" value="Update Profile" />
        <button className={styles.logOutBtn} onClick={onLogOutClick}>Log out</button>
      </form>
    </div>
  );
};

export default Profile;
