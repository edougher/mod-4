import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserSuccess } from '../actions/index'
import ImageCard from './ImageCard'
import Container from 'react-bootstrap/Container'
import images from '../images/imagesFromInsta.js'
import fire from '../firebase.js'
import 'firebase/auth'
 



class Home extends Component {

authListener = () => {
  fire.auth().onAuthStateChanged(user => {
    if(user){
      console.log(user);
      fetchSignedInUserInfo(user.email)
    
    } else {
      console.log('No User Signed In');
    }
    
  })

  const fetchSignedInUserInfo = (username) => {
    fetch(`http://localhost:3000/user/${username}`)
     .then(resp => resp.json())
     .then(respData => {
       console.log(respData)
       this.props.addUserSuccess(respData)
    })
  }
}
  
// ####  TODO instagram api
  getImages = () => {
    this.authListener()
     return images.map(image => (
         <ImageCard img={image} />
     ))
   } 

  render(){
        return(
        
            <div>
            <Container className="">
                <h1>Home</h1>
                <h4>{
                  this.props.currentUser
                  } is signed in</h4>

                <div className="row">
                {this.getImages()}
                </div>
                </Container>
            </div>    
            )
        }
  }

const mapDispatchToProps = {
    addUserSuccess
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.username
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)
