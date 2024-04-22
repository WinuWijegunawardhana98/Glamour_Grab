import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';




const MeasurementForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ height: '', weight: '', chest: '', waist: '', hips: '' }}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ handleChange, handleSubmit, values }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="height">
            <Form.Label>Height (cm)</Form.Label>
            <Form.Control type="number" name="height" value={values.height} onChange={handleChange} />
          </Form.Group>
          {/* Add more Form.Group components for other measurements (weight, chest, waist, hips) */}
          <Button variant="primary" type="submit">
            Adjust Size
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default MeasurementForm; 
