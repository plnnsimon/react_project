import gifka from '../../../assets/images/gifka.gif';
import React from 'react';

let Preloader = (props) => {
    return  <div style={ { backgroundColor: 'white' } } >
                <img src={gifka} alt='loading...' />
            </div>
    
}

export default Preloader;