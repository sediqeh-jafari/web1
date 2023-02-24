import './style.css'
import { useContext } from 'react';
import { themecontex } from '../App';
import withTheme from '../../withTheme';

function Footer({ onSubmit, onchange, handleClick_right, title, name, mh }) {

  const themeObject = useContext(themecontex)

 

  return (
    <form className={withTheme('footer', themeObject.theme)} onSubmit={onSubmit}>
      <input onChange={onchange} value={name} type='text' className='footer_input' placeholder='اضافه کردن کار...' ></input>
      {title}
      <div className='footer_buttons'>


        <button className='left'>تایید </button>
        <p className='right' onClick={handleClick_right}>منصرف شدم</p>

      </div>
    </form>
  )


}

export default Footer



