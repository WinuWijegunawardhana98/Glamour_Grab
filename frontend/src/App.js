import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MeasurementForm from './components/MeasurementForm';
import ModelDisplay from './components/ModelDisplay';

 function App() {
  const [modelMeasurements, setModelMeasurements] = useState(null);

  const handleFormSubmit = (values) => {
    // Here you can update the model's measurements or trigger any backend logic
    setModelMeasurements(values);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Virtual Dressing Room</h1>
          <MeasurementForm onSubmit={handleFormSubmit} />
        </Col>
        <Col>
          <h2>Model Preview</h2>
          {modelMeasurements && <ModelDisplay measurements={modelMeasurements} />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;




 


