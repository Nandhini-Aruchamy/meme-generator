import "./Meme.css";
//import memesData from "../memesData";
import { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
    randomImageName: "",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImg() {
    const memeDetail = allMemes[Math.floor(Math.random() * allMemes.length)];

    setMeme({
      topText: (document.getElementById("topText") as HTMLInputElement)!.value,
      bottomText: (document.getElementById("bottomText") as HTMLInputElement)!
        .value,
      randomImage: memeDetail["url"],
      randomImageName: memeDetail["name"],
    });
  }

  function handleChange(event: any) {
    const { name, value } = event.target;
    setMeme({ ...meme, [name]: value });
  }

  return (
    <main>
      <div className="memeContainer">
        <input
          id="topText"
          className="inputTxt"
          placeholder="Top Text"
          type="text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          id="bottomText"
          className="inputTxt"
          placeholder="Bottom Text"
          type="text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button className="memeBtn" onClick={getMemeImg}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="memeImg">
        <img src={meme.randomImage} alt={meme.randomImageName}></img>
        <h2 className="memeText top">{meme.topText}</h2>
        <h2 className="memeText bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
