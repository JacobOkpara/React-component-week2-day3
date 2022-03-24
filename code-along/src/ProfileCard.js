import { useState } from "react";

function ProfileCard({ writer }) {
  const [showBio, setShowBio] = useState(false);
  
  const handleClick = (bioData) => {
    setShowBio(!showBio);
  };

  return (
    <div className="card">
      <div className="cardContent">
        {showBio ? (
          <div className="bioWrap">
            <p className="bio">{writer.bio}</p>
          </div>
        ) : (
          <img
            src={`images/${writer.avatar}.png`}
            width="300px"
            alt={writer.img}
          />
        )}
      </div>
      <div className="textGroup">
        <h3>{writer.name}</h3>
        <p>{writer.email}</p>
        <p>{writer.phone}</p>

        <button className="actionBtn" onClick={() => handleClick(writer.bio)}>
          {showBio ? "View Image" : "Read Bio"}
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
