// import React from 'react'
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
// import "./../../assets/WomenMeasurementForm.css";


const WomenMeasurementForm = () => {
    const [formData, setFormData] = useState({
        height: '',
        bust: '',
        waist: '',
        hips: '',
        bodyShape: '',
        skinColor: ''
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
                const response = await axios.post('http://localhost:8080/api/fitting/femalemeasure/create', formData);
                console.log('Form submitted successfully:', response.data);
                // Optionally, reset form state or show success message
            } catch (error) {
                console.error('Error submitting form:', error);
                // Handle error (e.g., show error message)
            }
        } else {
            // Set validation errors
            setErrors(validationErrors);
        }
    };

    const validateForm = (data) => {
        const errors = {};
        if (!data.height) {
            errors.height = 'Height is required';
        }
        if (!data.bust) {
            errors.bust = 'Bust measurement is required';
        }
        if (!data.waist) {
            errors.waist = 'Waist measurement is required';
        }
        if (!data.hips) {
            errors.hips = 'Hip measurement is required';
        }
        if (!data.bodyShape) {
            errors.bodyShape = 'Body shape is required';
        }
        if (!data.skinColor) {
            errors.skinColor = 'Skin color is required';
        }
        return errors;
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#4CAF50' }}>
            <h2 style={{ marginTop: '0', color: '#fff' }}>Women's Measurement Form</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="height" style={{ color: '#fff' }}>Height (in cm):</label>
                    <input type="text" id="height" name="height" style={{ width: '100%', padding: '8px', border: '1px solid #fff', borderRadius: '5px' }} value={formData.height} onChange={handleChange} />
                    {errors.height && <div style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.height}</div>}
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="bust" style={{ color: '#fff' }}>Bust (in cm):</label>
                    <input type="text" id="bust" name="bust" style={{ width: '100%', padding: '8px', border: '1px solid #fff', borderRadius: '5px' }} value={formData.bust} onChange={handleChange} />
                    {errors.bust && <div style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.bust}</div>}
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="waist" style={{ color: '#fff' }}>Waist (in cm):</label>
                    <input type="text" id="waist" name="waist" style={{ width: '100%', padding: '8px', border: '1px solid #fff', borderRadius: '5px' }} value={formData.waist} onChange={handleChange} />
                    {errors.waist && <div style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.waist}</div>}
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="hips" style={{ color: '#fff' }}>Hips (in cm):</label>
                    <input type="text" id="hips" name="hips" style={{ width: '100%', padding: '8px', border: '1px solid #fff', borderRadius: '5px' }} value={formData.hips} onChange={handleChange} />
                    {errors.hips && <div style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.hips}</div>}
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="bodyShape" style={{ color: '#fff' }}>Body Shape:</label>
                    <select id="bodyShape" name="bodyShape" style={{ width: '100%', padding: '8px', border: '1px solid #fff', borderRadius: '5px', color: '#ccc' }} value={formData.bodyShape} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="apple">Apple</option>
                        <option value="pear">Pear</option>
                        <option value="hourglass">Hourglass</option>
                        <option value="rectangle">Rectangle</option>
                    </select>
                    {errors.bodyShape && <div style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.bodyShape}</div>}
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="skinColor" style={{ color: '#fff' }}>Skin Color:</label>
                    <select id="skinColor" name="skinColor" style={{ width: '100%', padding: '8px', border: '1px solid #fff', borderRadius: '5px', color: '#ccc' }} value={formData.skinColor} onChange={handleChange}>
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


export default WomenMeasurementForm;

