import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Routes from './components/routes';
import { Link } from 'react-router-dom';

function App() {
  return (
 <div className="demo-big-content">
    <Layout className="header">
        <Header transparent title="Marissa Crawford">
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contactpage">Contact Page</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
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
    </Layout>
</div>
  );
}

export default App;
