import React, { useState } from 'react';

const TextInput = ({ onChange }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        onChange(value);
    };

    return (
        <input type="text" value={value} onChange={handleChange} placeholder="Enter some text"
        />
    );
};

export default TextInput;