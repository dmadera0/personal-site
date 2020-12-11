import React from 'react'; 
import './App.css';
import {BrowserRouter as Router, } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state ={
      title: "Daniel Madera",
      headerlinks: [
        { title: "Home", path: '/' },
        { title: "About", path: '/about' },
        { title: "Contact", path: '/contact' }
      ],
      home: {
        title: 'head title',
        subTitle: 'body',
        text: 'closing',
      },
      about: {
        title: 'about me'
      },
    contact: {
        title: 'Lets Chat',
      }
    }
  }
  render(){
    return (
      <Router>
        <Container className="p-0" fluid ={true}>

          <Navbar className = "border-bottom">
            <Navbar.Brand>Daniels Website</Navbar.Brand>
          </Navbar>
        </Container>

      </Router>
    )  
  }

}

export default App;
