import React ,{useMemo,useState} from 'react'
function Memo (){
    const [counterOne,setOne] = useState(0)
    const [counterTwo,setTwo] = useState(0)
    const incrementOne = ()=>{
        setOne(pre => pre+1)
    }
    const incrementTwo = ()=>{
        setTwo(pre => pre+1)
    }
    const isEven = useMemo( ()=> {
        let i = 0
        while(i<2000000000)i++
        return counterOne%2 === 0
    },[counterOne])
    
    return(
        <div>
            <div>
                <button onClick={incrementOne}>count One-{counterOne}</button>
                <span>{isEven ? 'even' : 'odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>count Two-{counterTwo}</button>
            </div>
            
        </div>
    )
}

export default Memo