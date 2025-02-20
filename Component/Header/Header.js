// import React, { useState } from "react";
// import "./Header.css";
// import { BiMenuAltRight } from "react-icons/bi";
// import OutsideClickHandler from "react-outside-click-handler";

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const getMenuStyles = (menuOpen) => {
//     if (document.documentElement.clientWidth <= 800) {
//       return { right: !menuOpen ? "-100%" : "0" };
//     }
//   };

//   return (
//     <div>
//       <section className="h-wrappers">
//         <div className="flexCenter paddings innerWidth h-container">
//           <img src="./logo.png" alt="logo" width={100} />

//           {/* Outside Click Handler */}
//           <OutsideClickHandler
//             onOutsideClick={() => setMenuOpen(false)} // Ensure this function is passed
//           >
//             <div className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
//               <a href="#">Residencies</a>
//               <a href="#">Contact us</a>
//               <a href="#">Get Started</a>

//               <button className="button">
//                 <a href="#">Contact</a>
//               </button>
//             </div>
//           </OutsideClickHandler>

//           {/* Menu Icon */}
//           <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
//             <BiMenuAltRight size={30} />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Header;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const getMenuStyles = (menuOpen) => {
    return {
      right: menuOpen ? "0" : "-100%",
    };
  };

  return (
    <header className="h-wrappers">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="logo" width={100} />
        </Link>

        <OutsideClickHandler onOutsideClick={() => setMenuOpen(false)}>
          <nav className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
            <Link to="/residencies" onClick={() => setMenuOpen(false)}>Residencies</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            <Link to="/get-started" onClick={() => setMenuOpen(false)}>Get Started</Link>
            <button className="button">
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </button>
          </nav>
        </OutsideClickHandler>

        {/* Menu Icon for Mobile */}
        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </header>
  );
}

export default Header;
