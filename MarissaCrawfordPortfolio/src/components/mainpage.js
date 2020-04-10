import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

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