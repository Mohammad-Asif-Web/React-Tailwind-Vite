import React, {useState} from 'react'
import style from './form.module.css'

function Form() {
    // Hooks can be called inside of the function body, otherwise it will error
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (e)=>{
        // console.log(e.target.value)
        setName(e.target.value);
    }
    const handleEmail = (e)=>{
        // console.log(e.target.value)
        setEmail(e.target.value);
    }
    const handlePassword = (e)=>{
        // console.log(e.target.value)
        setPassword(e.target.value);
    }
    const handleSubmit = (e)=>{
        // by submitting the form default it will erase all the value form input field. That's why we used e.preventDefault function so that the data of form can not be disappear
        // Its a good Practice to save data into an object, and call this object as output
        e.preventDefault();
        let userInfo = {
            userName : name,
            userEmail : email,
            userPass : password
        }
        console.log(userInfo);
        // console.log(name, email, password);
        // console.log("form is submitted");
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div className={style.formGroup}>
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' id='name' className='' onChange={handleName} value={name} />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="email">Email: </label>
                <input type="email" name='email' id='email' onChange={handleEmail} value={email} />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="password">Password: </label>
                <input type="password" name='password' id='password' onChange={handlePassword} value={password} />
            </div>
            <input type="submit" value='Submit' className='border-2 px-4 py-1 bg-red-400 cursor-pointer' />
        </form>
    </div>
  )
}
export default Form;