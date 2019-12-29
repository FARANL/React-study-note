import React, {Component} from 'react'
class RefChild extends Component{
    constructor(props){
        super(props)
        this.re = React.createRef()

    }
    focusInput= ()=>(
        this.re.current.focus()
    )
    render(){
        return(
            <div>
                <input type='text' ref={this.re} />
            </div>
        )
    }
}
export default RefChild