import React, { Component } from 'react';
import Header from '../../../../components/layouts/Header';
import Footer from '../../../../components/layouts/Footer';
import M from 'materialize-css';

import AdminStudentNewWithFormik from './AdminStudentNewWithFormik';

class AdminStudentNew extends React.Component {
  componentDidMount() {
    M.updateTextFields();
  }

  render() {
    return (
      <div>
        <Header />
          <div className="container">
            <br/>

            <div className="row">
              <div className="col s12 m10 offset-m1">
                <div className="card r-box-shadow">
                  <div className="card-content" style={{padding: "50px"}}>
                    <h5 className="cyan-text airbnb-font" style={{marginTop: "0px"}}>新建学生</h5>
                    <AdminStudentNewWithFormik 
                      student={{}} 
                      action="NEW"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
          
        <Footer />
      </div>
    )
  }
}

export default AdminStudentNew;