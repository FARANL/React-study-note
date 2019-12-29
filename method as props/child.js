import  React from 'react'
function Child(props){
    return(
        <div>
            <button onClick={()=>props.greetHandle('child')}>Parent</button>
        </div>
    )
}
export default Child