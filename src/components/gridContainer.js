import React, {Component} from 'react';
import {Responsive, WidthProvider} from 'react-grid-layout';

import GridItem from './gridItem';

const ResponsiveReactGridLayout = WidthProvider(Responsive);



export default class GridContainer extends Component{
  constructor(props){
    super(props);
    this.buildGridItems = this.buildGridItems.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  buildGridItems(){
      return this.props.data.map((point, idx) => {
        return (
          <div key={idx} className="grid" style={this.props.style}>
            <GridItem
              title={point.title}
              subTitle={point.subTitle}
              order={idx}
              onSizeChange={this.props.onSizeChange}
              makeStatic={this.props.makeStatic}
              layout={this.props.layout[idx]}/>
          </div>
        )
      })
    }

  onLayoutChange(layout, all){
    // console.log(layout, all)
  }

  render(){
    let layouts = {lg: this.props.layout}

    return(
        <ResponsiveReactGridLayout
          onLayoutChange={this.onLayoutChange}
          breakpoints={{lg: 1200, md: 800, sm: 768, xs: 480}}
          useCSSTransforms={true}
          style={this.props.style}
          className="layout"
          layouts={layouts}
          cols={{lg: 2, md: 2, sm: 1, xs: 1}}
          rowHeight={300}
          draggableCancel='button'>


          {this.buildGridItems()}

        </ResponsiveReactGridLayout>
  )}
}
