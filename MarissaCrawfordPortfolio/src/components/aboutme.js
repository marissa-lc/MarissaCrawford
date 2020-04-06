import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import img from '/Users/marissacrawford/Desktop/Current Assignments/MarissaCrawford/MarissaCrawfordPortfolio/src/IMG_2010.png';

class AboutMe extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="main-grid">
                    <Cell col={12}>
                    <div className="aboutme-bio">
                    <img src ={img}
                        alt="aboutme-img"
                        className="aboutme-img"/>
                        <h1>
                        Marissa Crawford...
                        </h1>
                        <p>
                            is a recent graduate from University of Oregon's one of a kind coding bootcamp.
                            After ten years of working in the healthcare industry Marissa was ready for a new challenge and that's when she came across the world of coding.
                            Over the six month course she has learned how to create functional and dynamic websites and apps from the ground up. 
                            With her new knowledge of Javascript, MYSQL, Node.js, React, and more she is keen and ready to get out into the world to continue to create and learn.
                        </p>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default AboutMe;