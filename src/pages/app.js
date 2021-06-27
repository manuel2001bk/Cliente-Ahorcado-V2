import React from 'react'
import css from '../assets/css/app.css'
import imagen1 from '../assets/img/horcado1.png'
import imagen2 from '../assets/img/horcado2.png'
import imagen3 from '../assets/img/horcado3.png'
import imagen4 from '../assets/img/horcado4.png'
import imagen5 from '../assets/img/horcado5.png'


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            palabra : ""
        }
    }

    ingresarletra(){

    }

    render(){
        return (
            <body>
                <h1>Bienvenido al juego del Horcado.</h1>
                <div  className="card">
                    <div className="carta">
                        <div className="inputLetra">
                            <div className="form-floating mb-3">
                                <input id="letraeEntrada"
                                       type="text"
                                       className="form-control"
                                       placeholder="Letra a buscar"
                                       maxLength="1"/>
                                <label htmlFor="floatingInput">Letra a Buscar</label>
                            </div>
                        </div>
                        <div>
                            <button id="IngresarLetra"
                                    className="btn btn-outline-success"
                                    onClick={this.ingresarletra.bind(this)}>Ingresar Letra</button>
                        </div>
                        <div className="imagenHorcado">
                            <img id="imagenHorcado"
                                 src={imagen1}
                                 className="card-img-top"/>
                        </div>
                        <div>
                            <p id="palabraGuiones" >

                            </p>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}

export default  App;