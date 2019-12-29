import React, {Component} from 'react'
class Form extends Component{
    constructor(){
        super()
        this.state={
            user:'',
            add:'',
            skill:''
        }
        this.re=React.createRef()
    }
    handelUser = (event)=>{
        this.setState({
            user: event.target.value,
            
        })
    }
    handelAdd = (event)=>{
        this.setState({
            add: event.target.value,
            
        })
    }
    handelSkill = (event)=>{
        this.setState({
            skill: event.target.value,
            
        })
    }
    submit = (event)=>{
        alert(`Submitted ${this.state.user} ${this.state.add} ${this.state.skill} ${this.re.current.value}`)
        event.preventDefault()
    }
    reset = (event)=>{
        this.setState({
            user:'',
            add:'',
            skill:''
        })
    }
    render(){
        return (
            <form onSubmit={this.submit} onReset={this.reset}>
                <div>
                    <label>username</label>
                    <input type='text' value={this.state.user} onChange={this.handelUser}/>
                </div>
                <div>
                    <label>address</label>
                    <textarea type='text' value={this.state.add} onChange={this.handelAdd}></textarea>
                </div>
                <div>
                    <label>email</label>
                    <textarea type='text' ref = {this.re}></textarea>
                </div>
                <div>
                    <label>skill</label>
                    <select value={this.state.skill} onChange={this.handelSkill}>
                        <option>react</option>
                        <option>java</option>
                        <option>vue</option>
                    </select>
                    
                </div>
                <button type='submit'>submit</button> 
                <button type='reset'>reset</button> 
            </form>

        )
    }
    
}
export default Form