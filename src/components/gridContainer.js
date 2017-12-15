import React, {Component} from 'react';
import ReactGridLayout from "react-grid-layout";
import GridItem from './gridItem';




export default class GridContainer extends Component{
  constructor(props){
    super(props);

    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  onLayoutChange(layout){
    console.log(layout)
  }

  render(){

      let gridItems = this.props.data.map((point, idx) => {
        return (
          <div ref={ref => this.grid = ref} key={idx} className="grid">
            <GridItem
              title={point.title}
              subTitle={point.subTitle}
              order={idx}
              onSizeChange={this.props.onSizeChange}/>
          </div>
        )
      })

    return(
        <ReactGridLayout
          useCSSTransforms={true}
          onLayoutChange={this.onLayoutChange}
          style={this.props.style}
          className="layout"
          layout={this.props.layout}
          cols={2}
          rowHeight={300}
          width={this.props.parentWidth}
          draggableCancel='button'>


          {gridItems}

        </ReactGridLayout>
    )
  }
}
