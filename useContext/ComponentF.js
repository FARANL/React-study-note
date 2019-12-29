import React, {useContext} from 'react'
import { UserContext,ChannelContext } from '../App';

function ComponentF (){
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return(
       
        <div>userContext value: {user};ChannelContext value: {channel}</div>          
        
    )
    
}
export default ComponentF