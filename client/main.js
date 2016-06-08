import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { AutoForm } from 'uniforms';
import { TextField, SubmitField } from 'uniforms-unstyled';
import CustomTextField from './custom';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const testSchema = new SimpleSchema({
  text: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  custom: {
    type: String,
  },
});

class TestForm extends Component {
  handleSubmit(doc) {
    testSchema.clean(doc);
    console.log(doc);
  }
  render() {
    return (
      <AutoForm schema={ testSchema } onSubmit={ doc => this.handleSubmit(doc) }  >
        <TextField name="text" />
        <TextField type="email" name="email" />
        <TextField type="password" name="password" />
        <CustomTextField name="custom" />
        <SubmitField value="submit"/>
      </AutoForm>
    );
  }
}

Meteor.startup(() => {
  render(<TestForm/>, document.getElementById('react-root'))
});

