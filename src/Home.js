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
      <Link to={`/ratingcomponent/submit/${number}`}>
      <button className="submitBtn" disabled={!number}>
        SUBMIT
      </button>
      </Link>
    </div>
  );
};

export default Home;
