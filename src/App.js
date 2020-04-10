import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from "react-mdl";
import Routes from './components/routes';
import { Link } from 'react-router-dom';
import Image from '/Users/marissacrawford/Desktop/MarissaCrawford/MarissaCrawfordPortfolio/src/components/images/white_parallax_brick_full.jpg';

function App() {
  return (
 <div className="demo-big-content">
    <Layout className="header">
        <Header transparent title="Marissa Crawford"></Header>
        <Drawer>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/aboutme">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contactpage">Contact Page</Link>
            </Navigation>
        </Drawer>
        <Content>    
             <img src={Image}
            alt="background"
            className="mainBackground"/>
        </Content>
        <div className="page-content"/>
        <Routes/>
        <div>
    <Footer size="mini">
    <FooterSection>
        <FooterLinkList>
            <h3>Marissa Crawford</h3>
            <h3><Link to="/contactpage">Contact</Link></h3>
        </FooterLinkList>
    </FooterSection>
</Footer>
</div>

    </Layout>
</div>
  );
}

export default App;
