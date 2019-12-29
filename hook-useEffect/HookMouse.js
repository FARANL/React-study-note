import React, {useEffect,useState} from  'react'
function HookMouse (){
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    const mouse=(e)=>{
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>
    {
        window.addEventListener('mousemove',mouse)
    },[])
    return(
        <div>
            <h1>x-{x},y-{y} </h1>
        </div>
    )
}
export default HookMouse