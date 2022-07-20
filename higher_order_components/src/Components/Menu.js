import React, { Component } from 'react'
import withToggler from '../HOC/withToggler'

export class Menu extends Component {
  
    
  render() {
    const styles={
        display: this.props.on? "Block": "none"
    }
    return (
      <div>
        <button onClick={this.props.toggle}>{this.props.on? "Hide": "Show"} Menu</button>
        <p style={styles}>Compose bold, clear, mistake-free writing with Grammarly’s new 
            AI-powered desktop Windows app.</p>
      </div>
    )
  }
}
//we are specifying our default values defaultOnValue =true
export default withToggler(Menu,{defaultOnValue:true})