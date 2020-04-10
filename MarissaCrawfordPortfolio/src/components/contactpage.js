import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { MDBContainer, MDBInput, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBIcon } from "mdbreact";


class Contact extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  logValue = value => {
    console.log(value);
  };

  render() {
    return (
      <React.Fragment>

<Grid className="contact-grid">
        <Cell col={12}>
               <h1>
                   Let's get in Touch
               </h1>
  
               <div className="contact-list">
                 <List>
                 <ListItem>
                     <ListItemContent>
                       Marissa Crawford
                     </ListItemContent>
                   </ListItem>

                   <ListItem>
                     <ListItemContent>
                       971-400-XXXX
                     </ListItemContent>
                   </ListItem>
  
                   <ListItem>
                     <ListItemContent>
                       Rissa_cford@yahoo.com
                     </ListItemContent>
                   </ListItem>
                 </List>
               </div>
             </Cell>

      <MDBContainer>
        <MDBBtn onClick={this.toggle} color="black" className="mx-auto">
          launch modal contact
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal}
          toggle={this.toggle}
          size="md"
          cascading
        >
          <MDBModalHeader
            toggle={this.toggle}
            titleClass="d-inline title"
            className="text-center black darken-3 white-text"
          >
            <MDBIcon icon="pencil-alt" />
            Contact From
          </MDBModalHeader>
          <MDBModalBody>
            <MDBInput label="Your name"  />
            <MDBInput label="Your email"  iconClass="dark-grey" />
            <MDBInput
              label="Your message"
              type="textarea"
              rows="2"
              icon="pencil-alt"
              iconClass="dark-grey"
            />
            <div className="text-center mt-1-half">
              <MDBBtn
                color="black"
                className="mb-2"
                onClick={this.toggle}
              >
                send
                <MDBIcon icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
      </Grid>

      
      </React.Fragment>
        
    );
  }
}

export default Contact;

  
