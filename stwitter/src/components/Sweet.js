import { dbService, storageService } from "fbase";
import { React, useState } from "react";
import styles from "./Sweet.module.css";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

const Sweet = ({ sweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newSweet, setNewSweet] = useState(sweetObj.text);
  const [writedDate, setWritedDate] = useState(
    new Date(sweetObj.createdAt).toLocaleString()
  );
  const [toggleSweetManage, setToggleSweetManage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleEditing = () => {
    setEditing((prev) => !prev);
    setToggleSweetManage(false);
  };
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this sweet?");
    if (ok) {
      //delete sweet, photo
      //path of this data
      await dbService.doc(`sweets/${sweetObj.id}`).delete();
      // console.log(storageService.refFromURL(sweetObj.attachmentUrl));
      if (sweetObj.attachmentUrl !== "")
        await storageService.refFromURL(sweetObj.attachmentUrl).delete();
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.doc(`sweets/${sweetObj.id}`).update({
      text: newSweet,
    });
    setEditing(false);
  };
  const onChange = (e) => {
    const { value } = e.target;
    setNewSweet(value);
  };

  const onOpenManageBox = (e) => {
    setToggleSweetManage((prev) => !prev);
  };

  const onClickImage = (e) => {
    console.log("click");
  };

  return (
    <div className={styles.sweet}>
      {editing ? (
        <div className={styles.writedSweet}>
          <form onSubmit={onSubmit}>
            <textarea
              type="text"
              maxLength={120}
              placeholder="Edit your sweet"
              value={newSweet}
              required
              onChange={onChange}
            ></textarea>
            <button onClick={toggleEditing}>Cancel</button>
            <button type="submit">Update</button>
          </form>
        </div>
      ) : (
        <div className={styles.writedSweetContainer}>
          <div className={classNames({ [styles.writedSweet]: true })}>
            <div className={styles.sweetTop}>
              {sweetObj.photoURL && (
                <div className={styles.userPhotoWrapper}>
                  <img
                    className={styles.userPhoto}
                    src={sweetObj.photoURL}
                    width="50px"
                    height="50px"
                  ></img>
                </div>
              )}

              <span
                className={classNames({
                  [styles.writer]: true,
                  [styles.hide]: toggleSweetManage,
                })}
              >
                {sweetObj.displayName}
              </span>
              <span
                className={classNames({
                  [styles.date]: true,
                  [styles.hide]: toggleSweetManage,
                })}
              >
                {writedDate}
              </span>
            </div>
            <div
              className={classNames({
                [styles.imageWrapper]: true,
                [styles.hide]: toggleSweetManage,
              })}
              onClick={onClickImage}
            >
              <span
                className={classNames({
                  [styles.sweet]: true,
                })}
              >
                {sweetObj.text}
              </span>
              {sweetObj.attachmentUrl && (
                <img alt="sweetImage" src={sweetObj.attachmentUrl} />
              )}
            </div>

            {isOwner && (
              <>
                <div
                  className={classNames({
                    [styles.ownerBtnContainer]: true,
                    [styles.hide]: !toggleSweetManage,
                  })}
                >
                  <button
                    className={classNames(
                      {
                        [styles.ownerSweetManageBtn]: !toggleSweetManage,
                        [styles.manageBtn]: true,
                      },
                      { active: toggleSweetManage }
                    )}
                    onClick={onOpenManageBox}
                  >
                    {!toggleSweetManage ? "Manage" : "Close"}
                  </button>
                </div>
                <div
                  className={classNames({
                    [styles.ownerBtnBox]: true,
                    [styles.hide]: !toggleSweetManage,
                  })}
                >
                  <button
                    className={classNames({
                      [styles.showBtn]: toggleSweetManage,
                      [styles.hide]: !toggleSweetManage,
                    })}
                    disabled={!toggleSweetManage}
                    onClick={onDeleteClick}
                  >
                    Delete sweet
                  </button>
                  <button
                    className={classNames({
                      [styles.showBtn]: toggleSweetManage,
                      [styles.hide]: !toggleSweetManage,
                    })}
                    disabled={!toggleSweetManage}
                    onClick={toggleEditing}
                  >
                    Edit sweet
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sweet;
