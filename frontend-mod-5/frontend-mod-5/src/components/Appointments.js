import React from 'react';
import ApptCard from './ApptCard'
import { getMyAppts } from '../actions/index'
import { connect } from 'react-redux';
//import RequestForm from './RequestForm'
//import { Container } from 'semantic-ui-react'

class Appointments extends React.Component {

  constructor(props){
    super()
      this.state ={
        appts: props.appts
      }
      //this.setState({appts: })
      //this.getAppointments(props.currentUser_Id)
  }

  getAppointments(id){
  fetch(`http://localhost:3000/appointments/${id}`)
  .then(resp => resp.json())
  .then(respData  => {
      this.setState({
        appts: respData
      })
  })
 }

  

   handleEdit = (e, appt) => {
    this.props.history.push('/requestForm', appt)
  }

  renderAppts = () => {
   if(this.state.appts.length !== 0){
     return this.state.appts.map(appt => (
       <ApptCard edit={this.handleEdit} key={appt.id} images={appt.firebase_image_urls} appt={appt} name={this.props.userName} />
      ));
   } else {
     return null
   }
   
 }
 
 render() {
        return (
            <div>APPTS
            {this.renderAppts()}
            </div>
            );
    }
}

const mapDispatchToProps = {
    getMyAppts
}

const mapStateToProps = (state) => {
    return {
      currentUser_Id: state.currentUser.currentUser.id,
      userName: state.currentUser.currentUser.username,
      appts: state.currentUser.appointments
    }
    
  }

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);