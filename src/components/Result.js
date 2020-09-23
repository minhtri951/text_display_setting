import React, { Component } from 'react';

class Result extends Component {

  setStyle = () => {
    // co the viet trong <style></style> dc hay ko?
    return {
      //color
      color: this.props.color,
      borderColor: this.props.color,
      //font size
      fontSize: this.props.fontSize
    }
  }
  render() {
    return (

      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-8">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <p>Color: {this.props.color} - Fontsize: {this.props.fontSize}px</p></h3>
          </div>
          <div className="panel-body">
            <div id='content' //id nay dung set css ben ngoai nua
              style={this.setStyle()} //style chi set font,mau
            >
              Content text
        </div>
          </div>
        </div>
      </div>

    );
  }
}
export default Result;
