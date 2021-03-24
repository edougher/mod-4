import React from 'react';
import { connect } from 'react-redux'
import Calendar from 'react-calendar'
import moment from 'moment'
import SetDateTimeForm from './SetDateTimeForm'
import TimeSlots from './TimeSlots'
import './calendar.css'

 

class CalendarComponent extends React.Component {
    constructor(){
        super()
        this.state = {
        datesToAddContentTo: [],
        datesWithTimeSlots: [],
        dateIsActive: false,
        date: '',
        startTime: '',
        endTime: ''
        }
        this.getOpenDates()
    }

    getOpenDates = () => {
        fetch('http://localhost:3000/dates')
         .then(resp => resp.json())
         .then(respData => {
             let dates = respData.map(date => date.date)
             this.setState({datesToAddContentTo: dates, datesWithTimeSlots: respData})
            })
    }
    
    DayClicked(e){
        this.setState({
            dateIsActive: true,
            date: moment(e).format('YYYY-MM-DD')
        })
    }

    showTimeSlots = () => {
        if(this.state.datesWithTimeSlots.find(date => date.date.date === this.state.date)){
            console.log('hellotime ----true')
            let dateWithTimeSlots = this.state.datesWithTimeSlots.filter(date => date.date.date === this.state.date)
            let slots = dateWithTimeSlots.map(s => s.timeslots)
             return <TimeSlots date={this.state.date} slots={slots}/>
        }else{
            console.log('hellotime ----false');
        }

    }
    
    render() {        
        return (
           <h1>Calendar</h1>,
           <div>
           <Calendar
           style={{height: '500'}}
           onClickDay={e => this.DayClicked(e)} 
           tileClassName={({ date, view }) => {
            if(this.state.datesToAddContentTo.find(x => x.date === moment(date).format('YYYY-MM-DD'))){
                return 'react-calendar__tile--active'; // your class name
                }
            }}
           />
           {
           this.state.date === "" ?
           console.log('this.state.date === empty')
           :
            this.showTimeSlots()
            }

           {
            this.state.dateIsActive && this.props.userName === "admin@d.com" ?
           <SetDateTimeForm date={this.state.date} />
           :
           ''
           }
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      userName: state.currentUser.currentUser.username
    }
}

export default connect(mapStateToProps)(CalendarComponent);