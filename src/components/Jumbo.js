import React from 'react'
import { Row } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'



function Jumbo(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0" >
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        {props.title && <h1 className = "display-1 font-weight-bolder">{props.title}</h1> }
                        {props.subTitle && <h3 className = 'display-4 front-weight-light'>{props.subTitle}</h3> }
                        {props.text && <h3 className ='lead font-weight-light'>{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Jumbo