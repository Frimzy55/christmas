import React from 'react'
import { BrowserRouter ,Route,Routes,Link} from 'react-router-dom';
import Page1 from './Page1';

function My() {
  return (
    <BrowserRouter>
    <div>
      <Link to ='/page'>
      <button className='bg-blue-500 hover:bg-slate-400 text-yellow-100 font-bold py-2 px-4 rounded-xl' type='button'>
        click me!

      </button>
      </Link>
      <Routes>
        < Route path='/page' element={<Page1/>}/>

        
      </Routes>
      
    </div>
    
    </BrowserRouter>
    
    
  )
}

export default My
