import React, {Component} from 'react'
import withCount from './withCount'
class Hover extends Component{
    
    render(){
        const {counts,process}= this.props
        return (
            
            <h1 onMouseOver={process}>Hover {counts} times </h1>
        )
    }
}
export default withCount(Hover,10)