import React, {useState} from 'react'
import style from './form.module.css'

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

function Form() {

    const handleName = (e)=>{
        console.log(e.target.value)
    }
    const handleEmail = (e)=>{

    }
    const handlePassword = (e)=>{

    }

  return (
    <div>
        <form action="">
            <div className={style.formGroup}>
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' id='name' className='' onChange={handleName} />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="email">Email: </label>
                <input type="email" name='email' id='email' />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="password">Password: </label>
                <input type="password" name='password' id='password' />
            </div>
            <input type="submit" value='Submit' className='border-2 px-4 py-1 bg-red-400 cursor-pointer' />
        </form>
    </div>
  )
}
export default Form;