import React, { useState } from 'react';

const ColorPicker = ({ onChangeColor }) => {
    const [selectedColor, setSelectedColor] = useState('#ffffff');

    const handleColorChange = (event) => {
        const newColor = event.target.value;
        setSelectedColor(newColor);
        onChangeColor(newColor);
    };

    return (
        <div>
            <input type="color" value={selectedColor} onChange={handleColorChange} />
            <p>Selected color: {selectedColor}</p>
        </div>
    );
};

export default ColorPicker;