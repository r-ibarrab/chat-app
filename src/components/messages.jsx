import React from 'react';
import Message from './message';
import './styles/allmessages.css'

class messages extends React.Component{

    constructor(props){
        super(props);
        this.state={
            escribiendo:false,
            messages:[],
            msg:"",
            user:props.match.params.user
        }

    }


    componentDidMount(){
        window.firebase.database().ref('messages/').on('value', snap =>{

            const allmessages=snap.val();
           
            if(allmessages !== null){
                this.setState({messages:allmessages});
            }
          

        })

        var messageBody = document.querySelector('.messages-cont');
        messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;


    }

  

    handleSubmit=(e)=>{
        e.preventDefault();
        const mnsj = this.refs.maininput.value;
        const id = this.state.messages.length;
        this.refs.maininput.value="";

        window.firebase.database().ref('messages/'+id).set({
            id,
            content:mnsj,
            user:this.state.user
            }

        )
    }


   
    render(){
             return(
                <div className="allmessages-container" >
                    <div className="messages-cont">

                        {
                            this.state.messages.map(doc =>{  
                                
                                console.log('returning:', doc.user)  
                                if(doc.user === this.state.user)  {
    

                                    return (<Message status="sent" key={doc.id} content={doc.content} />)  

                                }else{
                                
                                    return (<Message status="received" key={doc.id} content={doc.content} />)  

                                }     

                            })                            
                        }

                    </div>
                    <div className="bottom-cont">
                        <form className="chat-input" onSubmit={(e)=>{this.handleSubmit(e)}}>
                            <input className="main-input" ref="maininput" type="text"/>
                            <input className="send-button" type="submit" value="Send"/>
                        </form>

                    </div>
            
                </div>
        
            )
    }
  

}

export default messages;