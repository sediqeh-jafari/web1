import './style.css'
function Todos ({items,ondelete,taskId}){
console.log(items);

function handleClick(){
    ondelete(taskId)
}
    return(
        <div className='task'>
            <p  className='task_item'>{items.text}</p>
            <button  className='task_button' onClick={handleClick}>X</button>
        </div>
    )
}

export default Todos