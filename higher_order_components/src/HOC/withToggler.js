import React, { Component } from 'react'

 class Toggle extends Component {
    state={
        on: this.props.defaultOnValue
    }
    handleClick=()=>{
        this.setState(prevState => {
            return {
                on : !prevState.on
            }
        })
    }
 
  render() {
    const Component=this.props.components
    return (
      <div>
        <Component on={this.state.on} toggle={this.handleClick} {...this.props}     />
      </div>
    )
  }
}
function withToggler(components,optionObj) {
  return function (props){
        return (
        <Toggle components={components} {...props} defaultOnValue={optionObj} />)
    }
  
}

export default withToggler