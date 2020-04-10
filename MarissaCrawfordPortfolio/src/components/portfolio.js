import React, {Component } from "react";
import {MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon} from "mdbreact";

class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>


        <br></br>
        <br></br>
                    <div className="aboutme-bio">
                        <h1>
                        Marissa's Work
                        </h1>
                    </div>

      <MDBRow>
        <MDBCol>
          <MDBCard
            className="card-image">
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 className="pink-text">
                <MDBIcon icon="desktop" /> HTML//CSS
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong>portfolio</strong>
                </MDBCardTitle>
                <p>
                  This project was to build a basic portfolio webpage to showcase the beginings of my HTML and CSS knowledge. 
                  At this point we were 8 weeks in to the six month program and I was just starting to get a little more comfortable
                  with my code so I used this opportunity to try to showcase some of my personality along with my newfound skills.
                </p>
                <MDBBtn color="pink">
                  <MDBIcon icon="clone left"/><a href="https://marissa-lc.github.io/Updated_Portfolio-HW8-/"target="_blank" rel="noopener noreferrer" style={{color: "white"}}> View project</a>
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            className="card-image">
            <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
              <div>
              <h5 className="pink-text">
                  <MDBIcon icon="desktop" /> Full Stack
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong>peer-up</strong>
                </MDBCardTitle>
                <p>
                peer-up was the second group project I participated in where we had to incorporate 
                everything we had learned so far. The concept of our app was to create a space where students could mentor each other anonymously.
                We ran out of time to get the app fully functional but the ReadMe elaborates on the concept and design.  
                </p>
                <MDBBtn color="pink">
                <MDBIcon icon="clone left"/><a href="https://marissa-lc.github.io/Peer-One/"target="_blank" rel="noopener noreferrer" style={{color: "white"}}> View project</a>
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      
<br></br>

      <MDBRow>
      <MDBCol>
        <MDBCard
          className="card-image"
          style={{
            backgroundImage:
              "/Users/marissacrawford/Desktop/MarissaCrawford/MarissaCrawfordPortfolio/src/components/images/NoteTaker.png"
          }}
        >
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 className="pink-text">
              <MDBIcon icon="desktop" /> Express
              </h5>
              <MDBCardTitle tag="h3" className="pt-2">
                <strong>Note Taker</strong>
              </MDBCardTitle>
              <p>
                Note Taker is an express app for writing, saving, and deleting notes. 
                We were given the front end code and were required to create an express
                backend to save and retriece the notes from a JSON file.
                This app was succesfully deployed to heroku.

              </p>
              <MDBBtn color="pink">
                <MDBIcon icon="clone left"/><a href=" https://note-takerapp-11.herokuapp.com/"target="_blank" rel="noopener noreferrer" style={{color: "white"}}> View project</a>
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
            <h5 className="pink-text">
                <MDBIcon icon="desktop" /> Mongo//Mongoose//Express
              </h5>
              <MDBCardTitle tag="h3" className="pt-2">
                <strong>Fitness Tracker</strong>
              </MDBCardTitle>
              <p>
                The Fitness Workout Tracker was another project were the front end 
                was already provided and we were required to create a Mongo database 
                with Mongoose Schema and handle routes using Express.
                This app was also deployed to heroku.
              </p>
              <MDBBtn color="pink">
              <MDBIcon icon="clone left"/><a href="https://maximumeffort.herokuapp.com/"target="_blank" rel="noopener noreferrer" style={{color: "white"}}> View project</a>
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>

    <br></br>

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
                <MDBIcon icon="desktop" /> Full Stack
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong>sitter</strong>
                </MDBCardTitle>
                <p>
                  Sitter was our final group project where we were expected to use everything we 
                  had learned over the last 6 months. The concept of this app was to create an easier
                  way for parents to communicate with their babysitters. 
                </p>
                <MDBBtn color="pink">
                <MDBIcon icon="clone left"/><a href="https://marissa-lc.github.io/sitter/"target="_blank" rel="noopener noreferrer" style={{color: "white"}}> View project</a>
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
              <h5 className="pink-text">
                  <MDBIcon icon="desktop" /> HTML//CSS
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong>portfolio</strong>
                </MDBCardTitle>
                <p>
                  This was another portfolio project at 14 weeks into the course.
                  By now I was feeling much more confident in creating fun, presentable, 
                  and functional webpages. With this portfolio I wanted to test out what 
                  I could create from "scratch".
                </p>
                <MDBBtn color="pink">
                <MDBIcon icon="clone left"/><a href=" https://marissa-lc.github.io/portfolio_page/"target="_blank" rel="noopener noreferrer" style={{color: "white"}}> View project</a>
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <br></br>

    </React.Fragment>

    );
  }
}

export default Portfolio;