import React from 'react';
import Messages from './components/messages'
import './app.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Enter from './components/enter'


const app =()=>{

    return(
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Enter}/>
                    <Route exact path="/:user" component={Messages}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default app;