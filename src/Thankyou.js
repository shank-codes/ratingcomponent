import React from "react";
import {useParams} from 'react-router-dom';

const Thankyou = () => {
  const { selectedNumber } = useParams();
  return (
    <div className="card">
      <img
        className="thankImg"
        src={process.env.PUBLIC_URL + "/images/illustration-thank-you.svg"}
        alt="thank you"
      ></img>
      <div className="ratingInfo">
        <p>You selected {selectedNumber} out of 5</p>
      </div>
      <p className="thankYouText">
        Thank you!
      </p>
      <p className="description">
        We appreciate you taking the time to give a rating. 
        If you ever need more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Thankyou;
