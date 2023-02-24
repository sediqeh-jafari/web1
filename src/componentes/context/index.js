import { useContext } from 'react';
import { themecontex } from '../App';


import  './style.css';
function Context (){

    const themeObject= useContext(themecontex);
    function handleClicke(){
        if (themeObject.theme==='light'){
            themeObject.setTheme("dark")
        }else{
            themeObject.setTheme('light')
        }
     
    }
    // const className= ['CT_button' , `CT_button ${themeObject.theme}`].join('');
    return(
        <button onClick={handleClicke} className='CT_button'>
            CT
        </button>
    )
}

export default Context