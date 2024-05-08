import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';


const MesurementForm = ({ onSubmit }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [chest, setChest] = useState('');
  const [waist, setWaist] = useState('');
  const [hips, setHips] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const measurements = { height, weight, chest, waist, hips };
    onSubmit(measurements);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="height">
        <Form.Label>Height (cm)</Form.Label>
        <Form.Control type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="weight">
        <Form.Label>Weight (kg)</Form.Label>
        <Form.Control type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="chest">
        <Form.Label>Chest (cm)</Form.Label>
        <Form.Control type="number" value={chest} onChange={(e) => setChest(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="waist">
        <Form.Label>Waist (cm)</Form.Label>
        <Form.Control type="number" value={waist} onChange={(e) => setWaist(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="hips">
        <Form.Label>Hips (cm)</Form.Label>
        <Form.Control type="number" value={hips} onChange={(e) => setHips(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MesurementForm;

