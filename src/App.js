import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';

import './App.css'

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      parentWidth: 1200
    }

  }

  componentDidMount(){
    let elem = this.grid;
    let parentWidth = elem.parentElement.offsetWidth;
    this.setState({parentWidth})
  }
  render() {


    let layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 1},
      {i: 'b', x: 1, y: 0, w: 1, h: 1},
      {i: 'c', x: 0, y: 1, w: 1, h: 1}
    ];
    return (
      <div ref={ref => this.grid = ref}>
        <ReactGridLayout  className="layout" layout={layout} cols={2} rowHeight={300} width={this.state.parentWidth}>
          <div className='grid' key="a">a</div>
          <div className='grid' key="b">b</div>
          <div className='grid' key="c">c</div>
        </ReactGridLayout>
      </div>
    );
  }
}

export default App;
