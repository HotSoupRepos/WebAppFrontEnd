import React from 'react';
import './About.css';
import AppleStore from '../../assets/images/AppleStore.png'
import GooglePlayStore from '../../assets/images/GooglePlayStore.png'
import UserProfile from '../../assets/images/UserProfile.png'

const About = () => {
    return (
        <>
            <section>
                <div className='about-text'>
                    <h1>Connecting those in Need</h1>
                    <p>When one of us has food insecurity, it is a problem for all of us. Let’s change that, one meal at a time. <br /><br />
                         We have too much abundance to let each other go hungry, period. </p>
                    <img src={AppleStore} alt='Apple store logo'/>
                    <img src={GooglePlayStore} alt='Google Play store logo'/>
                </div>
                <div className='image'>
                    <img src={UserProfile}/>
                </div>
            </section>
        </>
    )
}

export default About