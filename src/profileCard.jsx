import ProfilePic from "./assets/image-jeremy.png"

function ProfileCard(){

    return(
        <div className="profile-card">
            <img src={ProfilePic} className="profile-pic"></img>
            <p className="profile-text">Report for</p>
            <h1>Jeremy Robson</h1>
        </div>
    );
}
export default ProfileCard