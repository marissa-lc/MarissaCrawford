// import React, { Component } from 'react';
// import { Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, IconButton, Button } from 'react-mdl';

import React, { Component } from "react";
import {MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon} from "mdbreact";

class Portfolio extends Component {
  render() {
    return (
      <MDBRow>
        <MDBCol>
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
            }}
          >
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 className="pink-text">
                  <MDBIcon icon="chart-pie"/> Marketing
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong>This is card title</strong>
                </MDBCardTitle>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                  sit officia accusamus minus error nisi architecto nulla ipsum
                  dignissimos. Odit sed qui, dolorum!
                </p>
                <MDBBtn color="pink">
                  <MDBIcon icon="clone left" /> View project
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                "url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')"
            }}
          >
            <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
              <div>
                <h5 className="orange-text">
                  <MDBIcon icon="desktop" /> Software
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong>This is card title</strong>
                </MDBCardTitle>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                  sit officia accusamus minus error nisi architecto nulla ipsum
                  dignissimos. Odit sed qui, dolorum!
                </p>
                <MDBBtn color="deep-orange">
                  <MDBIcon icon="clone left" /> View project
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}

// export default CardExample;

// class Portfolio extends Component {
//     render() {
//         return(
//             <div className="portfolio">
// <Grid className="demo-grid-1">
//     <Cell col={4}>
//  <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
//     <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
//     <CardText>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         Mauris sagittis pellentesque lacus eleifend lacinia...
//     </CardText>
//     <CardActions border>
//         <Button colored>Get Started</Button>
//     </CardActions>
//     <CardMenu style={{color: '#fff'}}>
//         <IconButton name="share" />
//     </CardMenu>
// </Card>
//     </Cell>
//         )
//         <Cell col={1}>1</Cell>
//         (
//     <Cell col={4}>
// <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
//     <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
//     <CardText>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         Mauris sagittis pellentesque lacus eleifend lacinia...
//     </CardText>
//     <CardActions border>
//         <Button colored>Get Started</Button>
//     </CardActions>
//     <CardMenu style={{color: '#fff'}}>
//         <IconButton name="share" />
//     </CardMenu>
// </Card>
//     </Cell>
//         )
//         <Cell col={4}>
//  <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
//     <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
//     <CardText>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         Mauris sagittis pellentesque lacus eleifend lacinia...
//     </CardText>
//     <CardActions border>
//         <Button colored>Get Started</Button>
//     </CardActions>
//     <CardMenu style={{color: '#fff'}}>
//         <IconButton name="share" />
//     </CardMenu>
// </Card>
//     </Cell>
//         )
//         <Cell col={1}>1</Cell>
//         (
//     <Cell col={4}>
// <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
//     <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
//     <CardText>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         Mauris sagittis pellentesque lacus eleifend lacinia...
//     </CardText>
//     <CardActions border>
//         <Button colored>Get Started</Button>
//     </CardActions>
//     <CardMenu style={{color: '#fff'}}>
//         <IconButton name="share" />
//     </CardMenu>
// </Card>
//     </Cell>
//         )
//         <Cell col={4}>
//  <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
//     <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
//     <CardText>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         Mauris sagittis pellentesque lacus eleifend lacinia...
//     </CardText>
//     <CardActions border>
//         <Button colored>Get Started</Button>
//     </CardActions>
//     <CardMenu style={{color: '#fff'}}>
//         <IconButton name="share" />
//     </CardMenu>
// </Card>
//     </Cell>
//         )
//         <Cell col={1}>1</Cell>
//         (
//     <Cell col={4}>
// <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
//     <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
//     <CardText>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         Mauris sagittis pellentesque lacus eleifend lacinia...
//     </CardText>
//     <CardActions border>
//         <Button colored>Get Started</Button>
//     </CardActions>
//     <CardMenu style={{color: '#fff'}}>
//         <IconButton name="share" />
//     </CardMenu>
// </Card>
//     </Cell>
//         )
// </Grid>
// </div>

//         )
//     }
// }

export default Portfolio;