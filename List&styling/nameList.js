import  React from 'react'
import Process from './process';
function NameList(props){
    const persons=[
        {
            id: 1,
            name: 'Ann',
            age: 25,
            skill: 'React',

        },
        {
            id: 2,
            name: 'Bob',
            age: 22,
            skill: 'Vue',

        },
        {
            id: 3,
            name: 'Chirs',
            age: 30,
            skill: 'Java',

        }

    ]
    const namelist = persons.map(person => <Process key={person.id} person={person} />)
    return(
        <div>
           {
               namelist
           }
        </div>
    )
}
export default NameList