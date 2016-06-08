import React          from 'react';
import {connectField} from 'uniforms';

const CustomDynamicField = ({
    disabled,
    label,
    name,
    onChange,
    placeholder,
    value,
    type='text',
    ...props
  }) =>
    <section {...props}>
      {label && (
        <label>
          {label}
        </label>
      )}

      <input
        type={type}
        disabled={disabled}
        name={name}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </section>
  ;

export default connectField(CustomDynamicField);
