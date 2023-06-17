import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Custom_js_css_add from './components/custom_js_css_add'
import './components/Custom_js_css.css'
import Card from './components/Card'
import Data from './data.json'
import Props from './components/Props'
import React_icons from './components/React_icons'
import STATE from './STATE'
import Index from './Conditional_rendering/index'
import Event from './Event_Handling/event'
import SetState from './Hooks/setState'
import Hook_useState from './Hooks/Hooks_useState'
import UseEffect from './Hooks/UseEffect'
import Form from './Form/Form'
import Child from './State_Lifting/Child_to_perent_data'
import Home from './router/Home'
import About from './router/About'
import Error from './router/Error'
import Navbar from './router/Navbar'
import Blogs from './router/Blogs'
import Blog from './router/Blog'
import UseReducer from './Hooks/UseReducer'
import ContextApi from './ContextAPI/ContextApi'
import UseContext from './UseContext/UseContext'
import UseMemo from './UseMemo/UseMemo'
import Axios from './Axios/Axios'

function App() {

  // let items = [];
  //1. json data sending to Props component by loop
  // for (let x = 0; x<Data.length; x++){
  //   items.push( <Props nameText={Data[x].name} homeText={Data[x].home} />)
  // }

  //2. json data sending to Props component by map()
  // items = Data.map(item => <Props nameText={item.name} homeText={item.home} />)
  // const getChildData = (data)=>{
  //   console.log(data);
  // }

  return (
    <>
    {/* <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:home' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter> */}
      {/* <Custom_js_css_add />
      <Card /> */}
      {/* index is for unique key */}
      {/* {Data.map((item, index) => <Props key={index} nameText={item.name} homeText={item.home} />)} */}
      {/* <React_icons /> */}
      {/* <hr className='mt-4' /> */}
      {/* <STATE /> */}
      {/* <Index /> */}
      {/* <Event /> */}
      {/* <SetState /> */}
      {/* <Hook_useState />  */}
      {/* <UseEffect /> */}
      {/* <UseReducer /> */}
      {/* <ContextApi /> */}
      {/* <UseContext /> */}
      {/* <UseMemo /> */}
      <Axios />
      {/* <Form /> */}
      {/* <Child onChildData={getChildData} /> */}
      
    </>
  )
}

export default App
