import React from 'react';
import {Jumbotron } from 'reactstrap';

function HeaderComponent() {
  return (
    <div>
      <Jumbotron fluid>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Welcome</h1>
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  )
}

export default HeaderComponent
