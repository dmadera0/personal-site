import React from 'react'
import Jumbo from '../components/Jumbo'
import Content from '../components/Content'
import Form from 'react-bootstrap/Form'
class ContactPage extends React.Component{

    constructor(props){
        super(props);
            this.state ={
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
            
            }
    }
    render(){
        return(
            <div>
                <Jumbo title={this.props.title} />
            <Content>
                <Form>

                </Form>

            </Content>


            </div>


        )
    }

}

export default ContactPage