import React from 'react';

import imagen from '../images/badge-header.svg';
import foto from '../images/imagen.JPG';

import '../Badge.css';
import '../global.css';
import 'bootstrap/dist/css/bootstrap.css';


class Bagde extends React.Component {

    render() {
        return (
          <div className="Badge">
            <div className="Badge__header">
              
            </div>
    
            <div className="Badge__section-name">
              <img
                className="Badge__avatar"
                src={foto}
                alt="Avatar"
              />
              <h1>
                {this.props.firstName} <br /> {this.props.lastName}
              </h1>
            </div>
    
            <div className="Badge__section-info">
              <h3>{this.props.jobTitle}</h3>
              <div>@{this.props.twitter}</div>
            </div>
    
            <div className="Badge__footer">#Empresa</div>
          </div>
        );
      }

}

export default Bagde;