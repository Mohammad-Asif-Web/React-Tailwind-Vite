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

function App() {

  // let items = [];
  //1. json data sending to Props component by loop
  // for (let x = 0; x<Data.length; x++){
  //   items.push( <Props nameText={Data[x].name} homeText={Data[x].home} />)
  // }

  //2. json data sending to Props component by map()
  // items = Data.map(item => <Props nameText={item.name} homeText={item.home} />)

  return (
    <>
    
      <Custom_js_css_add />
      <Card />
      
      {/* index is for unique key */}
      {Data.map((item, index) => <Props key={index} nameText={item.name} homeText={item.home} />)}

      <React_icons />
      <hr className='mt-4' />
      <STATE />

      <Index />

      <Event />
      
    </>
  )
}

export default App
