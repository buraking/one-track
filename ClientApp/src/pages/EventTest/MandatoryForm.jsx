import React from 'react'
import FormInput from '../../components/form-input/form-input.component.jsx';
import CustomButton from '../../components/custom-button/custom-button.component.jsx';
import './MandatoryForm.styles.scss';
import axios from 'axios';
import uuid from 'react-uuid';

export class MandatoryForm extends React.Component {
    constructor() {
        super();
    
        this.state = {
            userId: uuid(),
            eventId: uuid(),
            spilleSted: '',
            dato: '',
            pris: '',
            startDate: new Date(),
        };
    }
    
    handleSubmit = async event => {
        event.preventDefault();

        const { userId, eventId, spilleSted, dato, pris } = this.state;

        return axios.post('http://172.17.26.204:80/OneTrack.RESTAPI/api/event/', {
            UserId: userId,
            EventId: eventId,
            EventName: spilleSted,
            Date: dato,
            Price: pris
          })
          .then(res => {
            console.log("Result Data: ", res.data);
            console.log(userId, eventId, spilleSted, dato, pris);
            if (res.status === 200)
            {
              this.props.onClick(res.data);
            }
          })
          .catch(err => console.log(err));
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }   
    render() {
        const { spilleSted, dato, pris} = this.state;
        return (
            <div className='mandatory-form'>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='spilleSted'
                        label='Spillested'
                        onChange={this.handleChange}
                        value={spilleSted}
                    />
                    <FormInput
                        type="date"
                        name='dato'
                        onChange={this.handleChange}
                        value={dato}
                    />
                    <FormInput 
                        type='text'
                        name='pris'
                        label='Indtast pris'
                        onChange={this.handleChange}
                        value={pris}
                    />
                    <CustomButton 
                        type='submit' 
                        label='Submit'
                    >SUBMIT</CustomButton>
                </form>
            </div>
        )
    }
}

export default MandatoryForm;
