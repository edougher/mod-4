import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Icon} from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { imageAttachmentSuccess } from '../actions'
import moment from 'moment'
import { storage } from '../firebase'

const ApptCard = (props) => {
  const images = props.images
  const image = {
    photo: ''
  }
  const url = {
    appointment_id: props.appt.id,
    image_url: '' 
  }
  
  const handleImageChange = e => {
    if (e.target.files[0]){
       image.photo = e.target.files[0]
       
   }
 }

 const uploadPhoto = () => {
  if(image.photo !== ''){
    const uploadTask = storage.ref(`/images/apptId/${props.appt.id}`).put(image.photo);
    uploadTask.on('state_changed', 
    (snapShot) => {
      //takes a snap shot of the process as it is happening
      console.log(snapShot)
    }, (err) => {
      //catches the errors
      console.log(err)
    }, () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL);
        url.image_url = downloadURL
        sendUrlToBackEnd()
      });
    })
    };
  }
  const sendUrlToBackEnd = () => {
    const imageObj = {
      img: url.image_url,
      appt_id: url.appointment_id
    }
    const reqObj = {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json'
     },
      body: JSON.stringify(imageObj)
    }
    fetch(`http://localhost:3000/image`, reqObj)
     .then(resp => resp.json())
     .then(respData => {
       console.log(respData)
       debugger
       props.imageAttachmentSuccess(respData)
    })

  }


 const style = {
  width: '500px', 
  maxWidth: '100%',
  boxShadow: '0 50px 70px -20px rgba(0, 0, 0, 0.8)'
}
  return(
  <Container className={{ marginTop: '20px'}}>
    <Card className='rounded-2 mb-9 py-0 mx-auto' style={style}>
    <Card.Content>
      <Card.Header>Original Request</Card.Header>
      <Card.Meta>
        <span className='date'>Created at: {moment(props.appt.created_at).format('MMMM Do, h:mm')}</span>
      </Card.Meta>
      <Card.Description>Location:   {props.appt.location}</Card.Description>
      <Card.Description>Height:   {props.appt.height} inches</Card.Description>
      <Card.Description>Width:   {props.appt.width} inches</Card.Description>
      <Card.Description>Number of colors:   #{props.appt.colors}</Card.Description>
      <Card.Description>Addition comments:   {props.appt.note}</Card.Description>
      
      
    </Card.Content>
    {
     props.appt.status !== "pending" ?
    <Card.Content extra>
    {props.appt.status}
    <span className='date'>Reviewed and Approved at:   {moment(props.appt.created_at).format('MMMM Do, h:mm')}</span>
    <Card.Description>Estimated Cost:   {props.appt.cost}$</Card.Description>
    <Card.Description>Duration:   {props.appt.time} hours</Card.Description>
    <Card.Description>Artist comments:   {props.appt.artistComments}</Card.Description>
    </Card.Content>
    :
    ''
    }
    
    <Card.Content extra>
    
    {
      props.appt.status === 'pending' ?
      <div> 
      <Icon name='red certificate'/>
      {props.appt.status}
      </div> 
      : 
      <div>
      <Icon name='blue certificate'/>
      {props.appt.status}
      <button class="ui right floated button">
      <NavLink to={{pathname: "/calendar", apptInfo: props.appt}}>Calendar</NavLink>
      </button>
      </div>
      }

      {props.appt.status === 'pending' ?
        <button onClick={(e) => props.edit(e, props.appt)}  class="ui right floated button">Edit</button>
        :
        ''
      }
    </Card.Content>
    <Card.Content>
      <input class="ui left floated button" type="file" name="photo" accept="image/png, image/jpeg" onChange={handleImageChange}/>
      <button class="ui right floated button" onClick={uploadPhoto}>Upload Photo</button>
      </Card.Content>
    </Card>
    </Container>
  )
}

const mapDispatchToProps = {
  imageAttachmentSuccess
}

export default connect(null, mapDispatchToProps)(ApptCard)