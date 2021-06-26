import React from 'react'

class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Bienvenido al juego del Horcado.</h1>
                <div>
                    <input type="text" className="search-bar" placeholder="Letra a buscar" maxLength="1"/>
                    <br/>
                    <br/>
                    <button>Ingresar Letra</button>
                </div>
            </div>
        )
    }
}

export default  App;