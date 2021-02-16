import { dbService } from 'fbase';
import { React, useState, useEffect } from 'react';

const Home = () => {
  const [sweet, setSweet] = useState("");
  const [sweets, setSweets] = useState([]);
  const getSweets = async () => {
    const dbSweets = await dbService.collection("sweets").get();
    dbSweets.forEach(document => console.log(document.data()));
    console.log(dbSweets);
  }
  useEffect(() => {
    getSweets();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.collection("sweets").add({
      sweet,
      createdAt: Date.now(),
    });
    setSweet("");
    console.log(sweet)
  }
  const onChange = (e) => {
    const {value} = e.target;
    setSweet(value);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={sweet} type="text" placeholder="What's on your mind?" maxLength={120} onChange={onChange}></input>
        <input type="submit" value ="Switter"></input>
      </form>
    </div>
  );
}

export default Home;