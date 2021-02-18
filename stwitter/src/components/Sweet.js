import { dbService, storageService } from "fbase";
import { React, useState } from "react";

const Sweet = ({ sweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newSweet, setNewSweet] = useState(sweetObj.text);

  const toggleEditing = () => setEditing((prev) => !prev);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this sweet?");
    if (ok) {
      //delete sweet, photo
      //path of this data
      await dbService.doc(`sweets/${sweetObj.id}`).delete();
      // console.log(storageService.refFromURL(sweetObj.attachmentUrl));
      if(sweetObj.attachmentUrl !== "")
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

  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your sweet"
              value={newSweet}
              required
              onChange={onChange}
            ></input>
            <input type="submit" value="Update sweet" />
            <button onClick={toggleEditing}>Cancel</button>
          </form>
        </>
      ) : (
        <>
          <h4>{sweetObj.text}</h4>
          {sweetObj.attachmentUrl && (
            <img src={sweetObj.attachmentUrl} width="50px" height="50px" />
          )}
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete sweet</button>
              <button onClick={toggleEditing}>Edit sweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Sweet;
