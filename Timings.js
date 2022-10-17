import React from 'react'

export default function Timings(props){
    const [isExpanded, setIsExpanded] = React.useState(true)
    const {title, 
            dailyCurrent, 
            dailyPrevious, 
            weeklyCurrent,
            weeklyPrevious, 
            monthlyCurrent, 
            monthlyPrevious,
            timeFrame} = props
            
            
    let styles
    let image 
    
    if (title === "Work"){
          styles = {background: "hsl(15, 100%, 70%)"}
          image = "./images/icon-work.svg"
    }else if (title === "Play"){
          styles = {background: "hsl(195, 74%, 62%)"}
          image = "./images/icon-play.svg"
    }else if (title === "Study"){
          styles = {background: "hsl(348, 100%, 68%)"}
          image = "./images/icon-study.svg"
    }else if (title === "Exercise"){
          styles = {background: "hsl(145, 58%, 55%)"}
          image = "./images/icon-exercise.svg"
    }else if (title === "Social"){
          styles = {background: "hsl(264, 64%, 52%)"}
          image = "./images/icon-social.svg"
    }else if (title === "Self Care"){
          styles = {background: "hsl(43, 84%, 65%)"}
          image = "./images/icon-self-care.svg"
    }
    
    let current
    let previous
    
    if(timeFrame[0] === true){
        current = dailyCurrent
        previous = `Yesterday -- ${dailyPrevious}`
    }
    if (timeFrame[1] === true){
        current = weeklyCurrent
        previous = `Last Week -- ${weeklyPrevious}`
    }
    if (timeFrame[2] === true){
        current = monthlyCurrent
        previous = `Last Month -- ${monthlyPrevious}`
    }
    
    return(

        <div style={styles} className="timing-container" >
            <div className="timing-icon__container">
                <img className="timing-icon" src={image} alt="" />
            </div>
            <div className="timing-data__container" >
                <p className="timing-label">{title}</p>
                
                <p className="timing-amount">{current}hrs</p>
                <p className="timing-previous">{previous}hrs</p>
            </div>
        </div>
        
    )
}

/*
<img onClick={shrinkExpandToggle} className="ellipsis" src="./images/icon-ellipsis.svg" alt="" />
<img onClick={shrinkExpandToggle} className="ellipsis" src="./images/more.svg" alt="" />
 */