import React from 'react';
import './About.css';
import AppleStore from '../../assets/images/AppleStore.png'
import GooglePlayStore from '../../assets/images/GooglePlayStore.png'

const About = () => {
    return (
        <>
            <section>
                <div className='about-text'>
                    <h2>Connecting those in Need</h2>
                    <p>When one of us has food insecurity, it is a problem for all of us. Let’s change that, one meal at a time. <br /><br />
                         We have too much abundance to let each other go hungry, period. </p>
                    <img src={AppleStore}/>
                    <img src={GooglePlayStore}/>
                </div>
                <div className='image'>
                    <p>THIS WILL BE AN IMAGE THIS WILL BE AN IMAGETHIS WILL BE AN IMAGETHIS WILL BE AN IMAGETHIS WILL BE AN IMAGETHIS WILL BE AN IMAGETHIS WILL BE AN IMAGETHIS WILL BE AN IMAGETHIS WILL BE AN IMAGETHIS WILL BE AN IMAGE</p>
                </div>
            </section>
        </>
    )
}

export default About