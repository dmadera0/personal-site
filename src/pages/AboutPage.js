import React from 'react'
import Jumbo from '../components/Jumbo'
import Content from '../components/Content'

function AboutPage(props){

    return(
        <div>
            <Jumbo title={props.title}/>

            <Content>
                <p>Hello World! My name is Daniel Madera. I am a full stack software engineer with expierence in React, React Native, Ruby, Ruby on Rails, JavaScript, and SQL  </p>
                <p>I have a passion for problem solving and making my clients lives easier.</p>
                <p>Always looking to better myself. Currenly I am learning Python, AWS, Angular, and MongoDB</p>
                <p>When Im not trying to solve the worlds problems with code. You can find me outside, trail running, climbing mountian, and skiing in the freshest poweder!</p>
            </Content>
        </div>
    )

}

export default AboutPage