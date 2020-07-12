import React from 'react';
import './styles/message.css'

const message = (props)=>{

    let justify;
    let bgcolor;

    if(props.status === 'sent'){
        
        bgcolor = "gray";
        justify = "flex-end";
    }else{
        bgcolor = "rgb(77, 124, 228)";
        justify = "flex-start";

    }

    return(
        <div style={{justifyContent:justify}}className="permessage-container">
             <div style={{backgroundColor:bgcolor}}className="message-container">
            <h1 className="message-content">{props.content}</h1>
            </div>

        </div>
       
        
    )

}

export default message;