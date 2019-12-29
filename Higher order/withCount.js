import React from 'react'
const withCount = (Original,times)=>{
    class withCount extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                counts: 0
            }
        }
        process=()=>{
            this.setState(
                prev=>{
                    return  {counts: prev.counts + times}
                }
            )
        }
        render(){
            return(
                <Original counts={this.state.counts} process={this.process} {...this.props}/>
            )
        }

    }
    return withCount
}
export default withCount