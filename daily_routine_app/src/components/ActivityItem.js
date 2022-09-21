import React from 'react';

const ActivityItem = (props)=>{
    const formattTime=(time)=>{
        var timeSplit = time.split(':'),
              hours,
              minutes,
              meridian;
            hours = timeSplit[0];
            minutes = timeSplit[1];
            if (hours > 12) {
              meridian = 'PM';
              hours -= 12;
            } else if (hours < 12) {
              meridian = 'AM';
              if (hours == 0) {
                hours = 12;
              }
            } else {
              meridian = 'PM';
            }
           let formatted_time =hours + ':' + minutes + ' ' + meridian;
           return formatted_time;
    }
    const time=formattTime(props.time);
    return(
        <div className="container mt-1">
        <div className="card bg-light" style={{width:'250px'}}>
        <div className="card-body">
          <p className="card-text"><span>{props.title+ " "}</span><span>{time}</span></p>
         
         </div>
      </div>
      </div>
    );
}
export default ActivityItem;
