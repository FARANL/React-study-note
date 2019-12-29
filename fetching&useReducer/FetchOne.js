import React, {useReducer,useEffect} from 'react'
import axios from 'axios'
const initial = {
    lodding: true,
    posts: {},
    error: ''
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'success':
            return {
                lodding: false,
                posts: action.load,
                error:''
            }
        case 'fail':
            return {
                lodding: false,
                posts: {},
                error:'something wrong'
            }
        default:
            return state
    }
}
function FetchOne (){
    const [state,dispatch] = useReducer(reducer,initial)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(
            rec=>{
                dispatch({type: 'success',load: rec.data})
            }
        )
        .catch(
            err=>{
                dispatch({type:'fail'})
            }
        )
    })
    return (
        <div>
            {state.lodding ? 'loading': state.posts.title}
            {state.error.length ? state.error : null}
        </div>
    )
}
export default FetchOne