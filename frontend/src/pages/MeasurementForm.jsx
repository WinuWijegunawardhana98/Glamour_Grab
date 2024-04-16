import React, { useState } from 'react';


function MeasurementForm() {
  const [formData, setFormData] = useState({
    height: '',
    chest: '',
    waist: '',
    hips: '',
    age: '',
    bodyShape: '', // dropdown options for different body shapes
    skinTone: '',   // dropdown options for different skin tones
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to backend using fetch or axios
    console.log('Form Submitted:', formData);
    // Replace with actual logic to send data to backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Your Measurements</h2>
      <div>
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="chest">Chest (cm):</label>
        <input
          type="number"
          id="chest"
          name="chest"
          value={formData.chest}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="waist">Waist (cm):</label>
        <input
          type="number"
          id="waist"
          name="waist"
          value={formData.waist}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="hips">Hips (cm):</label>
        <input
          type="number"
          id="hips"
          name="hips"
          value={formData.waist}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="bodyShape">Body Shape:</label>
        <select id="bodyShape" name="bodyShape" value={formData.bodyShape} onChange={handleChange}>
          <option value="">Select Body Shape</option>
          <option value="athletic">Athletic</option>
          <option value="curvy">Curvy</option>
          <option value="hourglass">Hourglass</option>
          {/* Add more options for different body shapes */}
        </select>
      </div>
      <div>
        <label htmlFor="skinTone">Skin Tone:</label>
        <select id="skinTone" name="skinTone" value={formData.skinTone} onChange={handleChange}>
          <option value="">Select Skin Tone</option>
          <option value="light">Light</option>
          <option value="medium">Medium</option>
          <option value="dark">Dark</option>
          {/* Add more options for different skin tones */}
        </select>
      </div>
      <button type="submit">Generate Model</button>
    </form>
  );
}

export default MeasurementForm;