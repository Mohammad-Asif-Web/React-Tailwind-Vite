import React, { Component } from 'react'

class event extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         changeEvent : ''
      }
    }
    handling = (e) =>{
        this.setState({
            changeEvent : e.target.value
        })
    }

    render(){
        return (
            <>
            
            <div>
                <label htmlFor="name" className='text-xl' >Change Handling: </label>
                <input type="text" onChange={this.handling} id='name' className='border-red-300 border-2 rounded p-2' />
                <p className='text-green-300'>{this.state.changeEvent}</p>
            </div>


            </>
        )
    }


}
export default event;
