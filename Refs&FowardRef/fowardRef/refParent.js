import React, {Component} from 'react'
import RefChild from './refChild'
class RefParent extends Component{
    constructor(props){
        super(props)
        this.re = React.createRef()
        
    }
    Click=()=>{
        
        this.re.current.focus()
    }
    render(){
        return(
            <div>
                <RefChild ref={this.re} />
                <button type='reset' onClick={this.Click}>focus</button>
            </div>
        )
    }
}
export default RefParent