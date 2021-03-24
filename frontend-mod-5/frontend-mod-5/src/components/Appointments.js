import React from 'react';
import ApptCard from './ApptCard'
import { getMyAppts } from '../actions/index'
import { connect } from 'react-redux';
//import RequestForm from './RequestForm'
//import { Container } from 'semantic-ui-react'

class Appointments extends React.Component {
   componentDidMount(){
       //fetch(`http://localhost:3000/appointments/${this.props.currentUser_Id}`)
       // .then(resp => resp.json())
       // .then(respData  => {
       //     this.props.getMyAppts(respData)
       //})
   }

   handleEdit = (e, appt) => {
    
    this.props.history.push('/requestForm', appt)
  }

  renderAppts = () => {
    if(this.props.myAppts !== undefined){
      return this.props.myAppts.map(appt => (
        <ApptCard edit={this.handleEdit} key={appt.id} appt={appt} name={this.props.userName} />
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
      currentUser_Id: state.currentUser.id,
      myAppts: state.currentUser.appointments,
      userName: state.currentUser.username
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);