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
                    <Form.Group>
                        <Form.Label htmlFor="full-name">Full Name</Form.Label>
                        <Form.Control id="full-name" name="name" type= "text" value={this.state.name} onChange={this.handleChange}/>
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control id="email" name="email" type= "email" value={this.state.email} onChange={this.handleChange}/>
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor="message">Message</Form.Label>
                        <Form.Control id="message" name="message" as= "textarea"rows="3" value={this.state.message} onChange={this.handleChange}/>
                    </Form.Group>
                </Form>

            </Content>


            </div>


        )
    }

}

export default ContactPage