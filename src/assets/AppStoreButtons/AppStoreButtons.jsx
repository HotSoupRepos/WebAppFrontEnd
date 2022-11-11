import React from 'react';
import './AppStoreButtons.css';
import AppleStore from '../../assets/images/AppleStore_DM.png'
import GooglePlayStore from '../../assets/images/GooglePlayStore_DM.png'

function AppStoreButtons () {

    function handleClick(appStore) {
        if (appStore == 'Google'){
            alert("This will one day lead to the Play store!")
        }
        else if (appStore == 'Apple'){
            alert("This will one day lead to the IOS store!")
        }
    }

    return (
        < >
        <div className='app-buttons'>
            <img src={AppleStore} onClick={()=>handleClick('Apple')} alt='Apple store logo'/>
            <img src={GooglePlayStore} onClick={()=>handleClick('Google')} alt='Google Play store logo'/>
        </div>
        </>
    )
}

export default AppStoreButtons