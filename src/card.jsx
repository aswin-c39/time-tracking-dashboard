import ellipsis from "./assets/icon-ellipsis.svg"

function Card(props){

    function decideTime(){
        if(props.timeframe === "Weekly")
            return("Week");
        if(props.timeframe === "Daily")
            return("Day");
        if(props.timeframe == "Monthly")
            return("Month");
    }
    return(
        <div className="card">
            <div className="card-title">
                <p>{props.heading}</p>
                <img src={ellipsis}/>
            </div>
            <div className="card-details">
                <p className="hours">{props.time}hrs</p>
                <p className="previous">Last {decideTime()} - {props.previous}hrs</p>
            </div>
           </div>
    );
}
export default Card