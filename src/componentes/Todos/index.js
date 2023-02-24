import { useContext } from 'react';
import { themecontex } from '../App';
import './style.css';
import withTheme from '../../withTheme';

function Todos({ items, ondelete, taskId }) {
    const themeObject = useContext(themecontex)

    function handleClick(){
        ondelete(taskId)
    }


    // onClick={() =>themeObject.setTheme('dark')}
// 
    return (
        <div className= { withTheme("task", themeObject.theme) }>
            <p className= 'task_item'>{items.text}</p>
            <button className='task_button' onClick = {handleClick}>X</button>
        </div>
    )
}

export default Todos