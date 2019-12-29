import React, {Component} from 'react'
import axios from 'axios'
import styles from './style.module.css'
class Get extends Component{
    constructor(props){
        super(props)
        this.state={
            posts: []
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(posts =>{
                console.log(posts)
                this.setState({posts: posts.data})
                
            })
    }
    render(){
        const posts = this.state.posts
        return (
            <p align='left'>
                list of the post
                {
                    posts.length?
                    posts.map(x => <p key={x.id}>{x.title}</p> ):
                    <div>something wrong</div>
                }
            </p>
            
        )
    }
}
export default Get