import React, {Component} from 'react';


export default class GridItem extends Component{
  constructor(props){
    super(props);

    this.changeSize = this.changeSize.bind(this);
  }

  changeSize(num){
    setTimeout(() => {
        this.props.onSizeChange(num, this.props.order);
        // <= But here, I have good DOM width.
      }, 0);
  }

  render(){
    let layout = this.props.layout
    let isStatic = layout ? layout.static : false

    return(
      <div key={this.props.key}>
        <h4>{this.props.title}</h4>
        <h5>{this.props.subTitle}</h5>
        <button onClick={this.changeSize.bind(this, 3)}> Tall </button>
        <button onClick={this.changeSize.bind(this, 4)}> Wide </button>
        <button onClick={this.changeSize.bind(this, 2)}> Tall and Wide </button>
        <button  onClick={this.changeSize.bind(this, 1)}> Normal </button>
        <button onClick={() => this.props.makeStatic(this.props.order)}>{isStatic ? 'Unpin' : "Pin"}</button>
      </div>
    )
  }
}
