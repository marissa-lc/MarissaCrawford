import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import {MDBIcon} from "mdbreact";


class MainPage   extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto', backgroundImage: "/Users/marissacrawford/Desktop/MarissaCrawfordPortfolio/src/components/images/mainpage (1) copy.jpg"}}>
                <Grid className="main-grid">
                    <Cell col={12}>
                    <div className="bio">
                        <h2>Marissa Crawford</h2>
                        <h1>
                            Full Stack Web Developer
                        </h1>
                        <p>
                            HTML || CSS || JAVASCRIPT || MYSQL
                            <br></br>
                            <a href="https://github.com/" rel="noopener noreferrer" target="_blank"
                            style={{padding: '2%', color: 'black'}}>
                    <MDBIcon fab icon="github" />
                        </a>
                             || REACT ||
                        <a href="https://www.linkedin.com/in/marissa-crawford-060878194/" rel="noopener noreferrer" target="_blank"
                        style={{padding: '2%', color: 'black'}}>
                    <MDBIcon fab icon="linkedin" />
                    </a>
                    </p>

                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default MainPage;