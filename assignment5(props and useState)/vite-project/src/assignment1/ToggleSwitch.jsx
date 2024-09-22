import React from 'react';

function ToggleSwitch({ toggleState }) {
  return (
    <button onClick={toggleState}>
      Toggle Switch
    </button>
  );
}

export default ToggleSwitch;