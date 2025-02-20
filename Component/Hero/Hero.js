// import React from 'react'
// import "./Hero.css";
// function Hero() {
//     return (
//         <div>
//             <section className='hero-wrapper'>
//                 <div className='padding innerWidth flexCenter hero-container'>
//                     <div className='flexColStart hero-left'>
//                     <div className='Hero-title'>
//                         <div className='orange-circle'/>
//                         <h1>Discover <br></br>Most Suitable Property</h1>
//                     </div>
                   
//                     <div className='flexColStart hero-des '>
//                         <span>
//                             Find verity of Properties that suit you every easilty
//                         </span>
//                         <span>Forget all difficuiles in finding a residency</span>
//                         <div className='search-bar'>

//                         </div>
//                     </div>
//                     </div>
//                     <div className='flexColCenter hero-rigth'>
//                         <div className='image-container'>
//                             <img src='./hero-image.png' alt='heroimage' ></img>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </div>
//     )
// }

// export default Hero
import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { MotionConfig } from "framer-motion";
import { MdOpacity } from "react-icons/md";

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="padding innerWidth flexCenter hero-container">
        {/* Left Section */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
         <h1>
              Discover <br />
              Most Suitable Property
              </h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">Find a variety of properties that suit you easily</span>
            <span className="secondaryText">Forget all difficulties in finding a residency</span>
        
            {/* <div className="flexCenter search-bar ">
              <HiLocationMarker style={{ color: "blue", fontSize: "24px" }} />
              {/* <input type="text" className="from-control"/> */}
              {/* <button className="button">Search</button>
            </div>  */}
            <div className="stats-container">
              <div className="stats">
                <span>
                  <CountUp start={88000} end={90000} duration={4} separator="," delay={1} />
                  <span>+</span>
                </span>
                <p>Premium Products</p>
              </div>

              <div className="stats">
                <span>
                  <CountUp start={19500} end={50000} duration={4} separator="," delay={1} />
                  <span>+</span>
                </span>
                <p>Happy Customers</p>
              </div>

              <div className="stats">
                <span>
                  <CountUp start={28} end={30} duration={4} separator="," delay={1} />
                  <span>+</span>
                </span>
                <p>Awards Winning</p>
              </div>
            </div>
      </div>
        </div>

        {/* Right Section */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
