import React from 'react';
import './styles/enter.css'

const enter = ()=>{

    const handleSubmit=(e)=>{
        e.preventDefault();
        const theuser = document.querySelector('.enteruser').value;


        window.firebase.database().ref('users/'+theuser).once('value',snap =>{
            const user = snap.val();
            if(user !== null){
                window.location.href=`/${user.id}`;
            }
            else{
                alert('that is not a user')
            }
        })

    }

    return(
        <div className="enter-container">
            <form className="form-jeje" onSubmit={(e)=>{handleSubmit(e)}} >
                <input className="enteruser" type="text"/>
                <input className="enteruser-button" type="submit" value="Enter" />
            </form>

        </div>

    )

}

export default enter;