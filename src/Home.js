import React from "react";

const Home = () => {
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
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span className="lastOption">5</span>
      </div>
      <button className="submitBtn">SUBMIT</button>
    </div>
  );
};

export default Home;
