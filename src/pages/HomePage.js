import React from 'react'
import Carousel from '../components/Carousel'
import Jumbo from '../components/Jumbo'

function HomePage(props){

    return(
        <div>

        <Jumbo 
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
        
        />
        <Carousel />
        </div>
    )

}

export default HomePage