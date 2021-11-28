import React from 'react';
import './switch.css';

export default function Switch(props) {
  const { switchName } = props;
  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`${switchName}`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`${switchName}`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};
