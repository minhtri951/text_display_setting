import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 28
    }
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onReset = this.onReset.bind(this);
  }
  onChangeColor(value) {
    this.setState({
      color: value
    });
  }
  onChangeSize(value) {
    let fontSize = this.state.fontSize + value;
    if (fontSize >= 8 && fontSize <= 48) {
      this.setState({
        fontSize: fontSize
      });
    }
  }
  onReset() {
    this.setState({
      color: 'red',
      fontSize: 28
    });
  }
  render() {
    return (
      <div>
        <div className="container mt-50">
        <h3><b>Setting:</b></h3><br/>
          <div className="row">
           
            <ColorPicker
              color={this.state.color}
              onChangeColor={this.onChangeColor}

            />
              <SizeSetting
                fontSize={this.state.fontSize}
                onChangeSize={this.onChangeSize}
              />
              <Reset
                onReset={this.onReset} />
           
          </div>
          <h3><b>Result:</b></h3><br/>


          <div className="row">
           
            <Result
              color={this.state.color}
              fontSize={this.state.fontSize} />
            
          </div>
        </div>
      </div>
    );
  }
}
export default App;
