import "./styles.css";
import reactlogo from "../images/reactLogo.png";

export const Navbar = () => {
  return (
    <nav>
      <img src={reactlogo} className="img1"></img>
      <h3>React Facts</h3>
      <h4>React project 1 </h4>
    </nav>
  );
};
