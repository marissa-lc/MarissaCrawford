import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import img from '/Users/marissacrawford/Desktop/Current Assignments/MarissaCrawford/MarissaCrawfordPortfolio/src/IMG_2010.png';

class MainPage   extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="main-grid">
                    <Cell col={12}>
                    <div className="bio">
                    <img src ={img}
                        alt="profile-img"
                        className="profile-img"/>
                        <h1>
                            Full Stack Web Developer
                        </h1>
                        <p>
                            HTML // CSS //JAVASCRIPT // MYSQL //REACT
                        </p>
                    <div className="links">
                        <a href="https://github.com/" rel="noopener noreferrer" target="_blank">
                            {/* <i className="fa fa-linkedin-square" */}
                        </a>
                    </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default MainPage;