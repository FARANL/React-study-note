import React, {Component} from 'react'
import withCount from './withCount'
class Count extends Component{
    
    render(){
        const {process,counts,child}= this.props
        return (
            
            <button onClick={process}>{child} Click {counts} times {this.props.parent}</button>
        )
    }
}
export default withCount(Count,5)