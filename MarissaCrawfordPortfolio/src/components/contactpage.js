import React, { Component } from 'react';
// import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
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
      <MDBContainer>
        <MDBBtn onClick={this.toggle} className="mx-auto">
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
            className="text-center light-blue darken-3 white-text"
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
                color="info"
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
      
      // <Grid className="contact-grid">
      //       <Cell col={6}></Cell>
      //       <Cell col={6}>
      //         <h2 style={{fontSize: '60px',fontFamily: 'Dancing Script', color: 'rgb(238, 153, 167)'}}>
      //             Contact Me
      //         </h2>
  
      //         <hr/>
  
      //         <div className="contact-list">
      //           <List>
      //             <ListItem>
      //               <ListItemContent style={{fontSize: '30px', fontFamily: 'Montserrat', color: 'rgb(238, 153, 167)'}}>
      //                 971-400-XXXX
      //               </ListItemContent>
      //             </ListItem>
  
      //             <ListItem>
      //               <ListItemContent style={{fontSize: '30px', fontFamily: 'Montserrat', color: 'rgb(238, 153, 167)'}}>
      //                 Rissa_cford@yahoo.com
      //               </ListItemContent>
      //             </ListItem>
      //           </List>
      //         </div>
      //       </Cell>
      //     </Grid>
        
    );
  }
}

export default Contact;

  
