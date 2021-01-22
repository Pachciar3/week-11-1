import React from 'react';

import './style.scss';

function Field({ label, children, error = false }) {
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      <div className="field__input">
        {children}
      </div>
      {error && <div className="field__error">To pole jest wymagane</div>}
    </label>
  )
}

export default Field;