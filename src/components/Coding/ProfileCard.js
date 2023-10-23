import React from 'react'
// import Cf from "../../Assets/Projects/cf.png";
function ProfileCard(props) {
  return (
    <div className="card-container">
    <header>
        {/* Rating : 1453 */}
        <img src="https://codeforces.org/s/41758/images/codeforces-sponsored-by-ton.png"  />
    </header>
    <h1 className="bold-text">
        Codeforces <span className="normal-text">{78}</span>
    </h1>
    <h2 className="normal-text">Rewa</h2>
    <div className="social-container">
        <div className="followers">
            <h1 className="bold-text">{1212}</h1>
            <h2 className="smaller-text">Followers</h2>
        </div>
        <div className="likes">
            <h1 className="bold-text">{3232}</h1>
            <h2 className="smaller-text">Likes</h2>
        </div>
        <div className="photos">
            <h1 className="bold-text">{56}</h1>
            <h2 className="smaller-text">Photos</h2>
        </div>
    </div>
</div>
  )
}

export default ProfileCard