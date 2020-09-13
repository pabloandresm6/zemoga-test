import React from 'react';
import dots from '../../images/dots.png';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import './footer.css';

function footer() {
  return (
    <div className="footer">
    <img className="layer-1-copy-10" src={dots} alt="" width="1021" height="1"/>
    <div className="row-4 group">
    <nav className="nav">
        <ul className="nav-list group">
        <li><p className="nav-item-1"><a href="#">Terms and Conditions</a></p></li>
        <li><p className="nav-item-1-2"><a href="#">Privacy Policy</a></p></li>
        <li><p className="nav-item-1-3"><a href="#">Contact Us</a></p></li>
        </ul>
    </nav>
    <img className="layer-1" src={twitter} alt="" width="30" height="25"/>
    <img className="layer-2" src={facebook} alt="" width="25" height="25"/>
    <p className="text-27">Folow Us</p>
    </div>
</div>
  );
}

export default footer;
