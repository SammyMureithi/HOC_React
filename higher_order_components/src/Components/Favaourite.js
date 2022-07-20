import React, { Component } from 'react'
import withToggler from '../HOC/withToggler'

export class Favaourite extends Component {
  render() {
    return (
      <div>
        <h1>Click heart to Favourite</h1>
        <span onClick={this.props.toggle}>{this.props.on ? "👍" : "👎"}</span>
      </div>
    )
  }
}
//we are specifying our default values defaultOnValue =false
export default withToggler(Favaourite,{defaultOnValue:false})