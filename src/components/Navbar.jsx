import "./Navbar.css";
import side from "../../public/Assests/side.png";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="navbar-left">
          <ul>
            <li>
              <img src={side} alt="" />
            </li>
            <li>MULTIPLAYER</li>
            <li>/</li>
            <li>SERVER</li>
            <li>/</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
