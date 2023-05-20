import React, {useState} from 'react'
import style from './form.module.css'

function Form() {
    // Hooks can be called inside of the function body, otherwise it will error
    // useState with object, this is best practice for multiple form values 
    const [user, setUser] = useState({
        name : '',
        email : '',
        password : ''
    })
    // Destructuring the name, email, password
    const {name, email, password} = user

    const handleEvent = (e)=>{

        // METHOD 1 FOR GETTING MULTIPLE VALUE FORM INPUT FIELD
        // It will get all the value automatic from input field, don't need to add statement specificly. this is best for professionals. short code, short time with spread operator
        setUser({
            ...user, // spread operator used to get all the input field data automatic
            [e.target.name]: e.target.value // it will get input type name and it's value
        })

        // METHOD 2 FOR GETTING MULTIPLE VALUE FROM INPUT FIELD
        // it will get the only value which statement we will add
        // const inputName = e.target.name;
        // if(inputName === 'name'){
        //     setUser({
        //         name : e.target.value,
        //         email,
        //         password
        //     })
        // }
        // if(inputName === 'email'){
        //     setUser({
        //         name,
        //         email : e.target.value,
        //         password
        //     })
        // }
        // if(inputName === 'password'){
        //     setUser({
        //         name,
        //         email,
        //         password : e.target.value
        //     })
        // }
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
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div className={style.formGroup}>
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' id='name' className='' onChange={handleEvent} value={name} />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="email">Email: </label>
                <input type="email" name='email' id='email' onChange={handleEvent} value={email} />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="password">Password: </label>
                <input type="password" name='password' id='password' onChange={handleEvent} value={password} />
            </div>
            <input type="submit" value='Submit' className='border-2 px-4 py-1 bg-red-400 cursor-pointer' />
        </form>
    </div>
  )
}
export default Form;