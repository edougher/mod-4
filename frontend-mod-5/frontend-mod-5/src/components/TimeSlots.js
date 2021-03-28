import React from 'react';
import Button from 'react-bootstrap/Button'

class TimeSlots extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    timeSlotRequest = (time) => {
        console.log(this.props.date, time);
    }

    render() {
        return (
        <div>
            <h4>{this.props.date}</h4>
            {
                this.props.slots.map((slot) => {
                     return slot.map(x => <div><h5>{x.start} : {x.end}</h5>, <Button onClick={() => this.timeSlotRequest(x)}>Request Timeslot</Button></div>) 
                })
                
                
            }
            
            
        </div>
            
            
        );
    }
}

export default TimeSlots;