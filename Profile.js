import React from 'react'

export default function Profile(props){
    
    
    return(
        <div className="profile-container">
            <div className="profile-heading">
                <img className="profile-img" src="./images/image-jeremy.png" alt="" />
                <h2>Report for<strong>Jeremy Robson</strong></h2>
            </div>
            <div className="profile-timings">
                <p className="profile-daily" onClick={()=>props.timeFrameToggle(props.time[0])}>Daily</p>
                <p className="profile-weekly" onClick={()=>props.timeFrameToggle(props.time[2])}>Weekly</p>
                <p className="profile-monthly" onClick={()=>props.timeFrameToggle(props.time[3])}>Monthly</p>
            </div>
        </div>
    )
}