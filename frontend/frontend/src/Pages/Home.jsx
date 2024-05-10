import React from 'react'
//import logoshop from './public/logo shop.png';



const Home = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome to Glamour Grab</h1>
            <p style={styles.description}>Your virtual dressing room for stylish transformations</p>
            <img src="public/logo shop.png" alt="Glamour Grab" style={styles.image} />
            <div style={styles.features}>
                <div style={styles.feature}>
                    <h2>Try Before You Buy</h2>
                    <p>Experiment with different outfits and styles before making a purchase.</p>
                </div>
                <div style={styles.feature}>
                    <h2>Personalized Recommendations</h2>
                    <p>Receive recommendations tailored to your unique preferences and body shape.</p>
                </div>
                <div style={styles.feature}>
                    <h2>Save and Share Looks</h2>
                    <p>Save your favorite outfits and share them with friends on social media.</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
  container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif', // Example font
      color: '#333', // Example color
      backgroundColor: '#35514e', // Example background color
  },
  title: {
      fontSize: '36px',
      marginBottom: '20px',
      fontWeight: 'bold', // Example font weight
      color: '#007bff', // Example color
  },
  description: {
      fontSize: '18px',
      marginBottom: '40px',
      color: '#666', // Example color
  },
  image: {
      maxWidth: '90%', // Adjust the value to make the image bigger
      marginBottom: '40px',
      borderRadius: '8px', // Example border radius
  },
  features: {
      display: 'flex',
      justifyContent: 'space-around',
      backgroundColor: '#fff', // Example background color
      padding: '20px',
      borderRadius: '8px', // Example border radius
  },
  feature: {
      width: '30%',
      border: '1px solid #ccc', // Example border
      padding: '20px',
      borderRadius: '8px', // Example border radius
      backgroundColor: '#f0f0f0', // Example background color
  },
};



export default Home;


