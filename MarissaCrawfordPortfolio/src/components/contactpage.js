import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
<div>
        <Grid className="contact-grid">
          <Cell col={6}></Cell>
          <Cell col={6}>
            <h2 style={{fontSize: '60px',fontFamily: 'Dancing Script', color: 'rgb(238, 153, 167)'}}>
                Contact Me
            </h2>

            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Montserrat', color: 'rgb(238, 153, 167)'}}>
                    971-400-XXXX
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Montserrat', color: 'rgb(238, 153, 167)'}}>
                    Rissa_cford@yahoo.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>        )
    }
}

export default Contact;