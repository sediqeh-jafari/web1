import { createContext, useState } from 'react';
import './style.css';
import Context from '../context';
import Todocontainer from '../Todocontainer';

export const themecontex = createContext();

function App() {

  const [theme, setTheme] = useState('light');
  return (
    // <div>sss</div>

    <>
      <div className="App">
     

        <themecontex.Provider value={{ theme, setTheme }}>
        <Context className='button'></Context>
          <Todocontainer />
        </themecontex.Provider>

        {/* FONT FARSI */}
        <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" rel="stylesheet" type="text/css" />
        {/* FONT ASOME */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous" referrerPolicy="no-referrer" />


      </div>
    </>
  );
}

export default App;
