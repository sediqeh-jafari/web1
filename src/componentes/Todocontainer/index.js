import { useState } from 'react'
import './style.css'
import Header from '../Header';
import Renderresult from '../RenderResult';


function Todocontainer() {

  const [searchquery, seTsearchquery] = useState('');
  

  function handlechange(e) {
    seTsearchquery(e.target.value)
  }

  
 
  return (
    <div className='parent'>
      <Header />
      <input placeholder='Enter' onChange={handlechange} type='text' ></input>

      <Renderresult title={searchquery}/>
    </div>
  )


}

export default Todocontainer



