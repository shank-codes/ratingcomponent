import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [number, setNumber] = useState(null);

  const handleNumberClick = (number) => {
    setNumber(number);
  };

  return (
    <div className="card">
      <div className="starBackground">
        <img
          className="starImage"
          src={process.env.PUBLIC_URL + "/images/icon-star.svg"}
          alt="star-icon"
        ></img>
      </div>
      <p className="question">How did we do?</p>
      <p className="description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      {/* {[1, 2, 3, 4, 5].map((number, index) => (
        <span
          key={index}
          className={clickedIndex === index ? 'clicked' : ''}
          onClick={() => handleClick(index)}
        >
          {number}
        </span> */}
        <div className="options">
          {
            [1,2,3,4,5].map((val, index) => (
              <span 
              key={val}
              className={number === index + 1 ? 'clicked' : ''}
              onClick={() => handleNumberClick(val)}> 
              {val}
              </span>
            ))
          }
        </div>
      {/* <div className="options">
        <span onClick={() => handleNumberClick(1)} className="one">  1</span>
        <span onClick={() => handleNumberClick(2)} className="two">  2</span>
        <span onClick={() => handleNumberClick(3)} className="three">3</span>
        <span onClick={() => handleNumberClick(4)} className="four"> 4</span>
        <span onClick={() => handleNumberClick(5)} className="five"> 5</span>
      </div> */}
      <Link to={`/submit/${number}`}>
      <button className="submitBtn" disabled={!number}>
        SUBMIT
      </button>
      </Link>
    </div>
  );
};

export default Home;
