// import React from 'react'
// import './Up.css'
// import img from '../../assets/Up.png'
// import { Link } from 'react-router-dom'

// const Up = () => {
//   return (
//     <div className='CentrarGadget'>
//         <a href='/'>
//             <img src={img} className='Up'></img>
//         </a>   
//     </div>
//   )
// }

// export default Up

import React, {useState, useEffect} from 'react';
import { FaAngleUp } from 'react-icons/fa';
import "../../index.css"





const Up = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
    }, []);
    const goToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    };
    return (
        <div className="top-to-btm">
            <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
        </div>
    );
};
export default Up;