import React from 'react'
import Jumbo from '../components/Jumbo'
import Content from '../components/Content'

function AboutPage(props){

    return(
        <div>
            <Jumbo title={props.title}/>

            <Content>
                <p>Im A Cold Blooded Killer</p>
                <p>150lbs of twisted steel and sex apeal</p>
                <p>Im dope and I do dope thing</p>
            </Content>
        </div>
    )

}

export default AboutPage