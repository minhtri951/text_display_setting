import React, { Component } from 'react';

class Reset extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-2">

        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Reset</h3>
          </div>
          <div className="panel-body">
            <button type="button" className="btn btn-primary"
              onClick={this.props.onReset}
            >Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Reset;
