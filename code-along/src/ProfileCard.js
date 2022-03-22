import React from "react";

export const ProfileCard = ({ writer }) => {
  return (
    <div className="card">
      <img
        src={`/images/${writer.avatar}.png`}
        width="300px"
        height="300px"
        alt=""
      />
      <div className="textGroup">
        <h3>{writer.name}</h3>
        <p>{writer.email}</p>
        <p>{writer.phone}</p>
      </div>
    </div>
  );
};
