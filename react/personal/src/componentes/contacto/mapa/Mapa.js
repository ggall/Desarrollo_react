import React from 'react';
 
class Mapa extends React.Component {
 
  render() {
 
    return (
 
        <div className="embed-responsive embed-responsive-4by3">
            <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7193.18964791762!2d-100.2939174!3d25.6515697!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1634190949580!5m2!1ses-419!2smx" width="600" height="450"></iframe>
        </div>
        
 
    )
    
  }
 
}
 
export default Mapa;