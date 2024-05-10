import React, { useState } from 'react';
import axios from 'axios';

const MenMeasurementForm = () => {
    const [formData, setFormData] = useState({
        height: '',
        weight: '',
        chest: '',
        waist: '',
        hip: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await axios.post('http://localhost:8080/api/fitting/malemeasure/create', formData);
                console.log('Form submitted successfully:', response.data);
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = (data) => {
        const errors = {};
        if (!data.height) {
            errors.height = 'Height is required';
        }
        if (!data.weight) {
            errors.weight = 'Weight is required';
        }
        if (!data.chest) {
            errors.chest = 'Chest measurement is required';
        }
        if (!data.waist) {
            errors.waist = 'Waist measurement is required';
        }
        if (!data.hip) {
            errors.hip = 'Hip measurement is required';
        }
        return errors;
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#4CAF50' }}>
            <h2 style={{ marginTop: '0', color: '#fff' }}>Men's Measurement Form</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="height" style={{ color: '#fff' }}>Height (in cm):</label>
                    <input type="text" id="height" name="height" style={{ width: '100%', padding: '8px', border: '1px solid #fff', borderRadius: '5px' }} value={formData.height} onChange={handleChange} />
                    {errors.height && <div style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.height}</div>}
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="chest" style={{ color: '#fff' }}>Chest (in cm):</label>
                    <input type="text" id="chest" name="chest" style={{ width: '100%', padding: '8px', border: '1px solid #fff', borderRadius: '5px' }} value={formData.chest} onChange={handleChange} />
                    {errors.chest && <div style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.chest}</div>}
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="waist" style={{ color: '#fff' }}>Waist (in cm):</label>
                    <input type="text" id="waist" name="waist" style={{ width: '100%', padding: '8px', border: '1px solid #fff', borderRadius: '5px' }} value={formData.waist} onChange={handleChange} />
                    {errors.waist && <div style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.waist}</div>}
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="hip" style={{ color: '#fff' }}>Hip (in cm):</label>
                    <input type="text" id="hip" name="hip" style={{ width: '100%', padding: '8px', border: '1px solid #ccc ', borderRadius: '5px' }} value={formData.hip} onChange={handleChange} />
                    {errors.hip && <div style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.hip}</div>}
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="skinColor" style={{ color: '#fff' }}>Skin Color:</label>
                    <select id="skinColor" name="skinColor" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px', color: '#ccc' }} value={formData.skinColor} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="fair">Fair</option>
                        <option value="medium">Medium</option>
                        <option value="olive">Olive</option>
                        <option value="dark">Dark</option>
                    </select>
                    {errors.skinColor && <div style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.skinColor}</div>}
                </div>
                <button type="submit" style={{ backgroundColor: '#006400', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>Submit</button>
            </form>
        </div>
    );
};

export default MenMeasurementForm;
