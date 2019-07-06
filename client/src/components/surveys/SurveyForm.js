import React, { Component } from 'react';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject'},
  { label: 'Email Body', name: 'body'},
  { label: 'Recipient List', name: 'emails'}
]

class SurveyForm extends Component {

  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field 
          key={name}
          type='text' 
          component={SurveyField} 
          label={label} 
          name={name}
        />
      )
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to='/surveys' className='red btn-flat left white-text'>
            Cancel
            <i className='material-icons right'>cancel</i>
          </Link>
          <button type='submit' className='teal btn-flat right white-text'>
            Next
            <i className='material-icons right'>done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {}

  _.each(FIELDS, ({ name }) => {
    if(!values[name]) {
      errors[name] = `You must provide a ${name}`
    }
  });
  
  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);