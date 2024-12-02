import ProfilePic from "./assets/image-jeremy.png"

function ProfileCard(){

    return(
        <div className="profile-card">
            <img src={ProfilePic} className="profile-pic"></img>
            <div className="profile-text">
                <p className="report-for">Report for</p>
                <h1>Jeremy Robson</h1>
            </div>
        </div>
    );
}
export default ProfileCard