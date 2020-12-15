import React from 'react'
import Jumbo from '../components/Jumbo'

function HomePage(props){

    return(
        <Jumbo 
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
        
        />
    )

}

export default HomePage