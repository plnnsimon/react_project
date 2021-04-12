import gifka from '../../../assets/images/gifka.gif';
import React from 'react';

let Preloader = (props) => {
    return  <div style={ { backgroundColor: 'white', width: '100px', } } >
                <img src={gifka} alt='loading...' width='100' />
            </div>
    
}

export default Preloader;