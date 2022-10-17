import React from 'react'
import Profile from './Profile'
import Timings from './Timings'
import {nanoid} from "nanoid"


export default function App(){
    
    const [timingData, setTimingData] = React.useState([])
    const [time, setTime] = React.useState(["daily", "weekly", "monthly"])
    const [timeFrame, setTimeframe] = React.useState([true, false, false])
    
    React.useEffect(()=>{
        fetch('./data.json')
            .then((res) => res.json())
            .then((data) => setTimingData(data))
            
        
    }, [])
    
    
    
    const categories = timingData.map(cat => {
        return(
            <Timings 
                key={nanoid()}
                title={cat.title}
                dailyCurrent={cat.timeframes.daily.current}
                dailyPrevious={cat.timeframes.daily.previous}
                weeklyCurrent={cat.timeframes.weekly.current}
                weeklyPrevious={cat.timeframes.weekly.previous}
                monthlyCurrent={cat.timeframes.monthly.current}
                monthlyPrevious={cat.timeframes.monthly.previous}
                timeFrame={timeFrame}
            />
        )
        
    })
    
    
    function timeFrameToggle(t){
        setTime(time)
        if(t === time[0]){
            setTimeframe([true, false, false])
        }
        
        if(t === time[2]){
            setTimeframe([false, true, false])
        }
        
        if(t === time[3]){
            setTimeframe([false, false, true])
        }
    }
    
    
    
    return(
        <div className="container">
            <Profile
                time={time}
                timeFrameToggle={timeFrameToggle} 
            />
            <div className="categories">
                {categories}
            </div>
        </div>
    )
}

/*
             
                
 */