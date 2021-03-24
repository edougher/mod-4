import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'


class ImageCard extends Component {
    render() {
         return (
 <div className="col-md-2 mt-4">
   <Card>
     <Card.Img variant="top" src={this.props.img} />
     <Card.Body>
       <Card.Title>Card title</Card.Title>
       <Card.Text>
         Blah blah blah
       </Card.Text>
     </Card.Body>
     <Card.Footer>
       <small className="text-muted">ex: Last updated 3 mins ago</small>
     </Card.Footer>
   </Card>
   </div>
    
         );
     }
 }

 export default ImageCard;