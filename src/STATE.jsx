import React, { Component } from 'react'

 class STATE extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    // setState function is used to set the state value
    increment = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }
    decrement = () =>{
        this.setState({
            count: this.state.count -1
        })
    }


  render() {
    const {count} = this.state
    return (
        <>
      <h2 className='text-3xl bg-slate-400'>React State Counter</h2>
      <div className='flex justify-center text-3xl my-4'>
      <p>Count:</p>
      <span>{count}</span>
      </div>
      <button className='mr-5 bg-green-400' onClick={this.increment} disabled={count === 5 ? true : false}>+</button>

      <button className='bg-red-400' onClick={this.decrement} disabled={count === 0 ? true : false}>-</button>
      </>
    )
  }
}
export default STATE;
