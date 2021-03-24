import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Button'
import { connect } from 'react-redux'

class ArtistComment extends Component {
  constructor(props){
    super()
    //debugger
   this.state = {
      time: 0,
      cost: 0,
      comments: ''
   }
  }

    handleChange = (event) => {
      console.log(`${event.target.name}: ${event.target.value}`);
      this.setState({
          [event.target.name]: event.target.value
      })
      //console.log(this.state);
    }

    submitForm = (e, state, id) => {
      e.preventDefault()
     const reqObj = {
      method: 'PATCH',
      headers: {
       'Content-Type': 'application/json'
     },
      body: JSON.stringify(state)
    }
    
     fetch(`http://localhost:3000/artistcomments/${id}`, reqObj)
      .then(resp => resp.json())
      .then(respData => {
        console.log(respData);
     })
    }

    render() {
        return (
            <div>
            <Card className="text-center">
            <Form style={{ width: '18rem' }}>
            <Form.Group controlId="appt">
              <Form.Label>Total Estimated Time</Form.Label>
              <Form.Control onChange={this.handleChange} name="time" placeholder="Estimated time in hrs..." />
            </Form.Group>
            <Form.Group controlId="approvalForm">
              <Form.Label>Estimated Cost</Form.Label>
              <Form.Control onChange={this.handleChange} name="cost" placeholder="Estimated cost in USD..." />
              <Form.Label>Additional Comments</Form.Label>
              <Form.Control onChange={this.handleChange} as="textarea" name="comments" rows={3} />
              <Button id={`${this.props.apptId}`} onClick={(e) => this.submitForm(e, this.state, this.props.id)} variant="primary" type="submit">
              Update
            </Button>
            </Form.Group>
            </Form>
            </Card>
            <h4>submitting this will change status to approved</h4>
            </div>
        );
    }
}

const mapDispatchToProps = {
  //newApptAdded,
  //deleteAppt
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistComment);
//export default ArtistComment;