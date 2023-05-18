import React, { Component } from 'react'

class hooks extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    handleIncrement = ()=>{
        this.setState({
            count : this.state.count + 1
        })
    }

  render() {
    const {count} = this.state
    return (
      <div className='mt-5 flex justify-center items-center'>
        <h3 className='mb-3'>Count : {count}</h3>
        <button onClick={this.handleIncrement}>setState Increment</button>
      </div>
    )
  }
}
export default hooks;