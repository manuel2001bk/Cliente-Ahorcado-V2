import React from 'react'

import {BrowserRouter,Switch,Route} from "react-router-dom";

//Modulos
import Game from "./Game";
import Login from "./Login";
import NotFound from "./NotFound";

class App extends React.Component {
    render(){
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Login}/>
                        <Route exact path='/Login' component={Login}/>
                        <Route exact path='/Game' component={Game}/>
                        <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default  App;