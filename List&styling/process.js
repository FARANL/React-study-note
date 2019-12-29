import React from 'react'
import styles from './style.module.css'
function Process({person,key}){
    return(
       <div>
            
            <h2 className={styles.success}>
                {key} I am {person.name}.I am {person.age} years old. I Know {person.skill}
            </h2>

        </div>
        
    )
}
export default Process