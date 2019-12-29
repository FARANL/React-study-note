import React, {useReducer} from 'react'
const initial = {
    first: 0,
    second: 5
}
const reducer= (current,action)=>{
    switch(action.type){
        case 'add': 
            return ({...current,first: current.first+action.value})
        case 'del': 
            return ({...current,first: current.first-action.value})
        case 'add2': 
            return ({...current,second: current.second+action.value})
        case 'del2': 
            return ({...current,second: current.second-action.value})
        case 'add5': 
            return ({...current,first: current.first+action.value})
        case 'del5': 
            return ({...current,first: current.first-action.value})
        case 'reset':
            return initial
        default:
            return current
    }
}
function CounterOne (){
    const [count,dispatch] = useReducer(reducer,initial)
    return (
        <div>
            <h2>count1 - {count.first}</h2>
            <h2>count2 - {count.second}</h2>
            <button onClick={()=>dispatch({type:'add',value:1})}>add</button>
            <button onClick={()=>dispatch({type:'del',value:1})}>del</button>
            <button onClick={()=>dispatch({type:'add2',value:1})}>add2</button>
            <button onClick={()=>dispatch({type:'del2',value:1})}>del2</button>
            <button onClick={()=>dispatch({type:'add5',value:5})}>add5</button>
            <button onClick={()=>dispatch({type:'del5',value:5})}>del5</button>

            <button onClick={()=>dispatch({type:'reset'})}>reset</button>
        </div>
    )
}
export default CounterOne