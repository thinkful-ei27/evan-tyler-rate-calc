import React from 'react';

export default function NumberInput(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        name={props.name}
        type="number"
        id={props.id}
        min={props.min}
        max={props.max}
        onChange={e => props.handleChange(e)}
      />
    </div>
  );
}
