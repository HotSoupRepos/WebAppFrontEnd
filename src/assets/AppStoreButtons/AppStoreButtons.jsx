import React from 'react';
import './AppStoreButtons.css';
import AppleStore from '../../assets/images/AppleStore_DM.png'
import GooglePlayStore from '../../assets/images/GooglePlayStore_DM.png'

function AppStoreButtons () {
    return (
        < >
        <div className='app-buttons'>
            <img src={AppleStore} alt='Apple store logo'/>
            <img src={GooglePlayStore} alt='Google Play store logo'/>
        </div>
        </>
    )
}

export default AppStoreButtons