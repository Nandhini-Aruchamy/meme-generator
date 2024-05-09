import "./Header.css";
import trollFace from "../../public/troll-face.png";
export default function Header() {
  return (
    <header>
      <img className="trollImg" src={trollFace} alt="troll face image."></img>
      <span className="headerTitle">Meme Generator</span>
      <span className="headerProject">React Project</span>
    </header>
  );
}
