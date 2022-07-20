import React from 'react'

function WithPointlessComponents(Components) {
  
    return function(props){
        return(
            <Components/>
        )
    }
}

export default WithPointlessComponents