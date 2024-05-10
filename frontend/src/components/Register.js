import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Grid, Typography, Container, Card, CardContent, makeStyles, Link } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    paper: {
        paddingTop: '150px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '146px',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    card: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Register = () => {
    const classes = useStyles();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');    
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            Swal.fire({
                title: "Success!",
                text: "Registration Success",
                icon: "success",
                confirmButtonText: "OK",
                type: "success",
            }).then(() => {
                window.location.href = "/CusLogin";
            }
            );                        
        } catch (err) {
            Swal.fire({
                title: "Error!",
                text: "Registration Not Success",
                icon: "error",
                confirmButtonText: "OK",
                type: "success",
            });
        }
    };

    return (
        <div style={{ background: 'linear-gradient(to bottom, #4b6cb7, #182848)', }}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon style={{ fontSize: 40 }} />
                    </Avatar>
                    <br />
                    <Typography component="h1" variant="h4" style={{color:'white'}}>
                        Register
                    </Typography>
                    <br />
                    <Card className={classes.card}>
                        <CardContent>
                            <form className={classes.form} onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="name"
                                            label="Name"
                                            name="name"
                                            autoComplete="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            type='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="phone"
                                            label="Phone Number"
                                            name="phone"
                                            autoComplete="phone"
                                            inputProps={{ maxLength: 10 }}
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            error={!!passwordError}
                                            helperText={passwordError}
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign Up
                                </Button>
                            </form>
                            <Typography variant="body2" color="text.secondary" align="center" mt={5}>
                                {'Already have an account? '}
                                <Link href="/" variant="body2">
                                    Sign In
                                </Link>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default Register;
