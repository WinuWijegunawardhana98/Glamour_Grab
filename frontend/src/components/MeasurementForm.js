import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import axios from 'axios'; 

const MeasurementForm = () => {
    const [formData, setFormData] = useState({
        height: '',
        weight: '',
        Skin_colour:'',
        Body_Shape:'',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('api/female/measurements', formData); // Make POST request to backend
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        const fetchFemaleMeasurements = async () => {
            try {
                const response = await axios.get('/api/female/measurements'); // Make GET request to backend
                console.log(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchFemaleMeasurements();
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Measurement Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Height (cm)"
                            variant="outlined"
                            type="number"
                            name="height"
                            value={formData.height}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Weight (kg)"
                            variant="outlined"
                            type="number"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Skin Colour"
                            variant="outlined"
                            type="text"
                            name="Skin_colour"
                            value={formData.Skin_colour}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Body Shape"
                            variant="outlined"
                            type="text"
                            name="Body_Shape"
                            value={formData.Body_Shape}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default MeasurementForm;

