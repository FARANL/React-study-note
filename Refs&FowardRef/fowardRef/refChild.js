import React, {Component} from 'react'
const RefChild = React.forwardRef(
    (props,ref)=>{
        return(
            <div>
                <input type='text' ref={ref} />
            </div>
        )
    }
)
export default RefChild