import React, { useReducer, useState } from 'react'

function UseReducer() {
    const BookData = [
        {
            id: 1, name: "Muhammad Fatih", age: 34, country: "Turkey"},
        // {   id: 2, name: "Abdul Kalam", age: 20, country: "Bangladesh"},
        // {   id: 13, name: "Danish Khan", age: 30, country: "India"}
    ]

    const [books, setBook] = useState(BookData);
    const [bookName, setBookName] = useState('')
    const handlechange = (e) => {
        e.preventDefault();
        setBook((prevState) => {
            const newBook = {id: new Date().getTime().toString(),
                name : bookName
            }
            return [...prevState, newBook]
        })
    }

  return (
    <div>
        <h2 className='text-red-400 text-3xl'>Book List</h2>
        <form onSubmit={handlechange} className='flex gap-3'>
            <input type="text" value={bookName}
            onChange={(e) =>{
                setBookName(e.target.value)
            }} 
            />
            <button type='submit' className='bg-green-400'>Add Book</button>
        </form>
        {
            books.map((book) =>{
                const {id,name, age, country} = book;
                return <ul key={id} className='my-4'>
                        <li>Name: {book.name}</li>
                        <li>Age: {book.age}</li>
                        <li>Country: {book.country}</li>
                       </ul>
            })
        }
        
        
    </div>
  )
}
export default  UseReducer;

