import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from "react-mdl";
import Routes from './components/routes';
import { Link } from 'react-router-dom';

function App() {
  return (
 <div className="demo-big-content">
    <Layout className="header">
        <Header transparent title="Marissa Crawford's Portfolio"></Header>
        <Drawer>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contactpage">Contact Page</Link>
            </Navigation>
        </Drawer>
        <Content />
        <div className="page-content"/>
        <Routes/>
<div>
    <Footer size="mini">
    <FooterSection type="left" logo="Title">
        <FooterLinkList>
            <a href="/">Help</a>
            <a href="/">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
</div>

    </Layout>
</div>
  );
}

export default App;
