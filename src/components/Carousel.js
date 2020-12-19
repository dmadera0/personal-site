import React, { Component } from 'react'
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            items:[
                {
                    id: 0,
                    title: 'Projects',
                    subTitle: 'check out my progress',
                    imgSrc:"",
                    link: 'https://github.com/dmadera0',
                    selected: false
                },
                {
                    id: 1,
                    title: 'social',
                    subTitle: 'check social meisa is a joke',
                    imgSrc:"",
                    link: 'https://www.linkedin.com/in/dmadera0/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Personal',
                    subTitle: 'check The life in my work life balance',
                    imgSrc:"",
                    link: 'https://github.com/dmadera0',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Personal',
                    subTitle: 'check The life in my work life balance',
                    imgSrc:"",
                    link: 'https://github.com/dmadera0',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Personal',
                    subTitle: 'check The life in my work life balance',
                    imgSrc:"",
                    link: 'https://github.com/dmadera0',
                    selected: false
                }
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