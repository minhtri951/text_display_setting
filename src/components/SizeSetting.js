import React, { Component } from 'react';

class SizeSetting extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">

      <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Size: {this.props.fontSize}px</h3>
          </div>
          <div className="panel-body">
            
            <button type="button" className="btn btn-success"
              onClick={()=>this.props.onChangeSize(-2)}
            >Decrease</button>
            <button type="button" className="btn btn-success ml-10"
              onClick={()=>this.props.onChangeSize(2)}
            >Increase</button>
            
          </div>
      </div>
      </div>
    );
  }
}

export default SizeSetting;
