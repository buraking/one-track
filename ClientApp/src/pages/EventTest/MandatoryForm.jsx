import React from 'react'
import FormInput from '../../components/form-input/form-input.component.jsx';
import CustomButton from '../../components/custom-button/custom-button.component.jsx';
import {Redirect} from 'react-router-dom';
import './MandatoryForm.styles.scss';
import axios from 'axios';
import uuid from 'react-uuid';

export class MandatoryForm extends React.Component {
    constructor() {
        super();
    
        this.state = {
            userId: uuid(),
            eventId: uuid(),
            venue: '',
            date: '',
            price: '',
            startDate: new Date(),
        };
    }
    
    nextStep = () => { 
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => { 
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { userId, eventId, venue, date, price } = this.state;

        return axios.post('http://172.17.26.204:80/OneTrack.RESTAPI/api/event/', {
            UserId: userId,
            EventId: eventId,
            EventName: venue,
            Date: date,
            Price: price
          })
          .then(res => {
            console.log("Result Data: ", res.data);
            console.log(userId, eventId, venue, date, price);
            if (res.status === 200)
            {
              this.props.onClick(res.data);
            }
            this.props.history.push('/concert-list/');
          })
          .catch(err => console.log(err));
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }   
    render() {
        const { venue, date, price} = this.state;
        return (
            <div className='mandatory-form'>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='venue'
                        label='Venue'
                        onChange={this.handleChange}
                        value={venue}
                    />
                    <FormInput
                        type="date"
                        name='date'
                        onChange={this.handleChange}
                        value={date}
                    />
                    <FormInput 
                        type='text'
                        name='price'
                        label='Price'
                        onChange={this.handleChange}
                        value={price}
                    />
                    <div className='buttons'>
                        <CustomButton 
                            type='submit' 
                            label='Submit'
                        >SUBMIT{' '}</CustomButton>
                        <CustomButton onClick={this.prevStep} secondaryButton>Back</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default MandatoryForm;
