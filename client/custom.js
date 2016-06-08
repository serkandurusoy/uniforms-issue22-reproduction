import React          from 'react';
import {connectField} from 'uniforms';

const CustomTextField = ({
    disabled,
    label,
    name,
    onChange,
    placeholder,
    value,
    ...props
  }) =>
    <section {...props}>
      {label && (
        <label>
          {label}
        </label>
      )}

      <input
        type="text"
        disabled={disabled}
        name={name}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </section>
  ;

export default connectField(CustomTextField);
