import React, {Component} from 'react';


export default class GridItem extends Component{
  constructor(props){
    super(props);

  }

  changeSize(num){
      this.props.onSizeChange(num, this.props.order)
  }

  render(){
    return(
      <div key={this.props.key}>
        <h4>{this.props.title}</h4>
        <h5>{this.props.subTitle}</h5>
        <button onClick={this.changeSize.bind(this, 3)}> Tall </button>
        <button onClick={this.changeSize.bind(this, 4)}> Wide </button>
        <button onClick={this.changeSize.bind(this, 2)}> Tall and Wide </button>
        <button onClick={this.changeSize.bind(this, 1)}> Normal </button>
      </div>
    )
  }
}
