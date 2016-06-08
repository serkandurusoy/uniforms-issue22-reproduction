import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { AutoForm } from 'uniforms';
import { TextField, SubmitField } from 'uniforms-unstyled';
import CustomTextField from './custom-text';
import CustomEmailField from './custom-email';
import CustomDynamicField from './custom-dynamic';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const testSchema = new SimpleSchema({
  text: {
    type: String,
  },
  customText: {
    type: String,
  },
  customEmail: {
    type: String,
  },
  customDynamicText: {
    type: String,
  },
  customDynamicEmail: {
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
        <CustomTextField name="customText" />
        <CustomEmailField name="customEmail" />
        <CustomDynamicField name="customDynamicText" />
        <CustomDynamicField type="email" name="customDynamicEmail" />
        <SubmitField value="submit"/>
      </AutoForm>
    );
  }
}

Meteor.startup(() => {
  render(<TestForm/>, document.getElementById('react-root'))
});

