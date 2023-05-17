import React, { Component } from 'react'
import Home from './Home'
import Login from './Login'

class index extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLogin : true
    }
  }
  render() {
    // rendering by if-else statement
    // let element;
    // if(this.state.isLogin){
    //   element = <Home />
    // } else {
    //   element = <Login />
    // }
    const {isLogin} = this.state

    return (
        <>
          <div className='mt-5 text-3xl bg-slate-400 p-1'>Conditional Rendering</div>
          {/* if else statement */}
          {/* <div>{element}</div> */}

          <div>{isLogin ? <Home /> : <Login />}</div>
        </>
    )
  }
}
export default index
