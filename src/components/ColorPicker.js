import React, { Component } from 'react';

class ColorPicker extends Component {

  render() {
    var colors = ['red', 'green', 'blue', '#ccc'];
    var elmColors = colors.map(
      (color, index) => {
        let style = { backgroundColor: color }
        return <span
          key={index}
          style={style}
          className={this.props.color === color ? 'active' : ''}
          onClick={() => this.props.onChangeColor(color)
          }
        />
      }
    );
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">

        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Color Picker</h3>
          </div>
          <div className="panel-body">
            {elmColors}
             
          </div>
        </div>

      </div>

    );
  }
}

export default ColorPicker;
