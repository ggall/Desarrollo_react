import React from 'react';
 
class Jumbotron extends React.Component {
 
  render() {
 
    return (
 
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-3">Nosotros </h1>
                <p>
                    Integrantes de una comunidad de desarrollo.
                    <br/>
                    Solo compartiendo el conocimiento se puede tener un mejor futuro.
                </p>
                <p><a className="btn btn-primary btn-lg" href="https://itesm.mx" target="_blank" role="button">Visitar Web</a></p>
            </div>
        </div>
 
    )
    
  }
 
}
 
export default Jumbotron;