import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class MandatoryForm extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <TextField 
                        hintText="Spillested"
                        floatingLabelText="Indtast spillested"
                        onChange={handleChange('spilleSted')}
                        defaultValue={values.spilleSted}
                    />
                    <br/>
                    <TextField
                        
                        type="date"
                        onChange={handleChange('dato')}
                        defaultValue={values.dato}
                    />
                    <br/>
                    <TextField 
                        hintText="Indtast spilletid"
                        floatingLabelText="Spilletid"
                        onChange={handleChange('playTime')}
                        defaultValue={values.playTime}
                    />
                    <br/>
                    <TextField 
                        hintText="Indtast kapacitet"
                        floatingLabelText="Kapacitet"
                        onChange={handleChange('kapacitet')}
                        defaultValue={values.kapacitet}
                    />
                    <br/>
                    <TextField 
                        hintText="Indtast Genre"
                        floatingLabelText="Genre"
                        onChange={handleChange('genre')}
                        defaultValue={values.genre}
                    />
                    <br/>
                    <TextField 
                        hintText="Indtast Pris"
                        floatingLabelText="Pris"
                        onChange={handleChange('pris')}
                        defaultValue={values.pris}
                    />
                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default MandatoryForm;
