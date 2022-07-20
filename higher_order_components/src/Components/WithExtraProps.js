
function WithExtraProps(Components){
    return function(props){
        return (
            <Components greeting="Hi" {...props}/>
        )
    }
}
export default WithExtraProps