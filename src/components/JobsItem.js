import React from "react";

function JobsItem({ image, Username,Username1, Location ,Info,  Salary,Experience }) {
  return (
    <div className="jobsItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h2> {Username} </h2>
      <h4> {Username1} </h4>
      <p>{Experience}</p>
      <p>{Info}</p>
      <p>{Location}</p>

    </div>
  );
}

export default JobsItem;
