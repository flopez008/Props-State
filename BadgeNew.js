import React from 'react';
import Navbar from '../components/Navbar';
import Bagde from '../components/Bagde';

import '../components/styles/Navbar.css';
import header from '../images/badge-header.svg';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component{

  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleClick = e =>{
    this.setState({
      form:{
        firstName:'',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
      }
    })
  };


  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Bagde
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>

            <button onClick={this.handleClick} className="btn btn-primary">
                Save
            </button>

            <button onClick={this.handleClick} className="btn btn-primary">
                Clean
            </button>
            
          </div>
        </div>




      </div>
      
    );
  }
   
   
}

export default BadgeNew;

















