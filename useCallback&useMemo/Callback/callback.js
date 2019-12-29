import React ,{useState,useCallback} from 'react'
function Callback(){
    const [age,setAge] = useState(25)
    const [salary,setSalary] = useState(5000)
    const incrementAge = useCallback(()=>{
        setAge(age+1)
    },[age])
    const incrementSalary = useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
    return(
        <div>
            <div>
                <p>Age={age}</p>
                <button onClick={incrementAge}>increment age</button>
            </div>
            <div>
                <p>Salary={salary}</p>
                <button onClick={incrementSalary}>increment salary</button>
            </div>
            
        </div>
    )
}
export default Callback