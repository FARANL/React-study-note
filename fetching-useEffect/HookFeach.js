import React , {useState, useEffect} from 'react'
import axios from 'axios'

function HookFeach (){
    const [posts,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idB,setIdB] = useState(1)
    useEffect( ()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idB}`)
        .then(
            rec => {
                setPost(rec.data)
            }
    )
    } ,[idB])
    const handle = ()=> {
        setIdB(id)
    }
    return(
        <div>
            <input type='text' value={id} onChange={e=>setId(e.target.value) } />
            <button onClick={handle}>Click</button>
            <div>{posts.title}</div>
        </div>
    )
}
export default HookFeach