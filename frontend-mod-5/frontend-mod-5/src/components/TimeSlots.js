import React from 'react';

class TimeSlots extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
        <div>
            <h4>{this.props.date}</h4>
            {
                this.props.slots.map((slot) => {
                     return slot.map(x => <h5>{x.start} : {x.end}</h5>) 
                     })
                
            }
            
            
        </div>
            
            
        );
    }
}

export default TimeSlots;