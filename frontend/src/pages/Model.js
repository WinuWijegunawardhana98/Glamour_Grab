import React, { useState } from 'react';

const ModelForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        width: '',
        height: '',
        depth: '',
        color: '',
        // Add more fields as needed
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Width:
                <input type="text" name="width" value={formData.width} onChange={handleChange} />
            </label>
            <label>
                Height:
                <input type="text" name="height" value={formData.height} onChange={handleChange} />
            </label>
            <label>
                Depth:
                <input type="text" name="depth" value={formData.depth} onChange={handleChange} />
            </label>
            <label>
                Color:
                <input type="text" name="color" value={formData.color} onChange={handleChange} />
            </label>
            {/* Add more input fields as needed */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default ModelForm;
