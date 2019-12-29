import React, {Component} from 'react'
import Child from './child';
class Parent extends Component{
    constructor(props){
        super(props)
        this.state={
            dadName: 'Ann'
        }
        this.greetMom = this.greetMom.bind(this)

    }
    greetMom(child){
        alert(`hello ${this.state.dadName} from ${child}`)
    }
    render(){
        return(
            <div>
                <Child greetHandle = {this.greetMom}/>
            </div>
        )
    }
}
export default Parent