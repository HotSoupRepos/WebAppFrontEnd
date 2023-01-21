import React from 'react';
import './About.css';
import UserProfile from '../../assets/images/UserProfile.png'
import AppStoreButtons from '../../assets/AppStoreButtons/AppStoreButtons';

const About = () => {
    return (
        <>
            <section id="About">
                <div className='section-container'>
                    <div className='about-text'>
                        <h1>Connecting those in Need</h1>
                        <p>When one of us has food insecurity, it is a problem for all of us. Let’s change that, one meal at a time.</p>
                        <p> We have too much abundance to let each other go hungry, period. </p>
                        {/* <AppStoreButtons/> */}
                    </div>
                    <div className='image'>
                        <img src={UserProfile} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About