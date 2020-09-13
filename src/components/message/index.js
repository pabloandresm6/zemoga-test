import React from 'react';
import closeIcon from '../../images/close_icon.png';
import './message.css';

function message() {
  return (

    <div className="message group">
    <div className="col-2">
      <p className="text-10">Speak out. Be heard.</p>
      <p className="text-11">Be counted</p>
    </div>
    <p className="text-12">Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>
    <img className="shape-4-copy" src={closeIcon} alt="" width="15" height="16"/>
  </div>
  );
}

export default message;
