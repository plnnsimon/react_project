import React from 'react';
import classes from'./../Dialogs.module.css';

const Message = (props) => {

    // let newMessage = React.createRef();
    // let addNewMessage = () => {
    //     let text = newMessage.current.value;
    //     alert(text);
    // }

    return (
        <div>
            <div className={classes.message}>{props.message}</div>
            <div>
                {/* <textarea ref={ newMessage }></textarea>
                <button onClick={ addNewMessage }>Send</button> */}
            </div>
        </div>
        
            
    )
}


export default Message