import profilePic from '../public/Profile_Pic.jpg'

function Card() {
    return (
      <div className="card">
        <img
          className="card-image"
          src={profilePic}
          alt="profile picture"></img>
        <h2 className="card-title">Mohd Naseem</h2>
        <p className='card-text'>I'm Tech support associate and I enjoy Marvel movies</p>
      </div>
    );
}
export default Card;