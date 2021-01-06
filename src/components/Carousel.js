import React, { Component } from 'react'
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import blog from '../assets/images/curriculum-resume-pngrepo-com.png';
import portfolio from '../assets/images/pie-chart-marketing-pngrepo-com.png';
import resume from '../assets/images/curriculum-vitae-resume-pngrepo-com.png';

class Carousel extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            items:[
                {
                    id: 0,
                    title: 'Projects',
                    subTitle: 'Check Out My Progress',
                    imgSrc: portfolio,
                    link: 'https://github.com/dmadera0',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Social',
                    subTitle: 'Learning through others',
                    imgSrc: blog,
                    link: 'https://www.linkedin.com/in/dmadera0/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Resume',
                    subTitle: 'Qualification and Accomplishments',
                    imgSrc: resume,
                    link: 'file:///Users/dmadera/Desktop/Daniel%20Madera%20software%20developer%20resume.pdf',
                    selected: false
                },
                
            ]
        

        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });

    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;