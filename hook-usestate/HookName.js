import React, {useState} from'react'
function HookName (){
    const [name,setName] = useState({Firstname:'',Lastname:''})
    return(
        <div>
            <input type='text' value={name.Firstname} onChange={e=>setName({...name,Firstname: e.target.value})}/>
            <input type='text' value={name.Lastname} onChange={e=>setName({...name,Lastname:e.target.value})} />
            <h2>Firstname: {name.Firstname}</h2>
            <h2>Lastname: {name.Lastname}</h2>
        </div>
    )
}
export default HookName