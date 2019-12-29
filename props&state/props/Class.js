import React, {Component} from 'react'
class Class extends Component {
    
    render(){
        const {name,age} = this.props
        return(
            <div>
                I am {name},I am {age} years old.
            </div>
        )
    }
}
export default Class