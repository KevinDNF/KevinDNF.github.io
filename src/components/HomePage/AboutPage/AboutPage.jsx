import React from 'react';
import AboutCard from '../AboutCard/AboutCard'

const AboutPage = () => {
    const AboutPageMainStyle = {
        padding: '3em',
        backgroundColor: '#FFEF88',
    }

    return (
    <div id='AboutPage' style={AboutPageMainStyle}>
        <AboutCard />
    </div>
    );
}

export default AboutPage;