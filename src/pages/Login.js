import React from 'react'
import {Link} from "react-router-dom";
import css from '../assets/css/Login.css'


class Login extends  React.Component{
    render() {
        return(
            <div className="cuerpoLogin">
                <div>
                    <div className="body-game">
                        <br/>
                        <br/>
                        <div  >
                            <h1>Bienvenido al juego del ahorcado.</h1>
                            <br/>
                            <Link to='/Game'>
                                <button className="btn btn-outline-dark">Iniciar Partida</button>
                            </Link>
                        </div>
                        <br/>
                        <br/>
                    </div>

                </div>
            </div>
        )
    }
}
export default Login;