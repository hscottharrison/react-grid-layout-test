import React, { Component } from 'react';
import GridContainer from './components/gridContainer';
import './App.css'

let dataPoints = [
  {
    title: 'Block A',
    subTitle: 'Block a',
    sizing: 1
  },
  {
    title: 'Block B',
    subTitle: 'Block b',
    sizing: 1
  },
  {
    title: 'Block C',
    subTitle: 'Block c',
    sizing: 1
  },
  {
    title: 'Block D',
    subTitle: 'Block d',
    sizing: 1
  },
  {
    title: 'Block E',
    subTitle: 'Block e',
    sizing: 1
  },
  {
    title: 'Block F',
    subTitle: 'Block f',
    sizing: 1
  }
]


class App extends Component {
  constructor(props){
    super(props);

    this.state={
      parentWidth: 1200,
      layout: []
    }

    this.onSizeChange = this.onSizeChange.bind(this);
  }

  componentDidMount(){
    let elem = this.grid;
    let parentWidth = elem.parentElement.offsetWidth;
    let {layout} = buildLayout(dataPoints);
    this.setState({parentWidth, layout});
  }

  onSizeChange(sizing, item){
    let layout = this.state.layout;
    layout[item].h = 2;
    this.setState({layout})

  }



  render() {
    return (
      <div ref={ref => this.grid = ref}>
        <GridContainer
          data={dataPoints}
          onSizeChange={this.onSizeChange}
          layout={this.state.layout}
          gridItems={this.state.gridItems}
          parentWidth={this.state.parentWidth}/>
      </div>
    );
  }
}

function buildLayout(dataPoints){
  let layout = [];


  let gridItems = dataPoints.map((point, idx) => {
    //set basic layout -- allows the layout to find the correct div
    let layoutData = {i: idx.toString(), handle: '.handle', cancel: '.cancel'};
    //set the sizing of each div
    switch(point.sizing){
      case 1:
        layoutData.w = 1;
        layoutData.h = 1;
        break;
      case 2:
        layoutData.w = 2;
        layoutData.h = 2;
        break;
      case 3:
        layoutData.w = 1;
        layoutData.h = 2;
        break;
      case 4:
        layoutData.h = 1;
        layoutData.w = 2;
        break;
      default:
        break;
    }
    //construct the layout of the divs in the grid
    let count = 0;
    if(idx === 0){
      layoutData.x = 0;
      layoutData.y = 0;
    }
    else if (idx % 2 === 0){
      layoutData.x = 0;
      layoutData.y = (idx / 2);
    }
    else {
      let count = 1;
      layoutData.x = 1;
      layoutData.y = (idx - count);
      count ++;
    }

    layout.push(layoutData);




  })

  return {layout}
}

export default App;
