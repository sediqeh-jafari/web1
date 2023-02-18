import { useState } from 'react';
import Todos from "../Todos";

const initial_tasks = [
    { id: 'a', text: 'کار1' },
    { id: 'b', text: 'کار2' },
    { id: 'c', text: 'کار3' },
    { id: 'g', text: 'کار4' },
    { id: 'k', text: 'کار5' },
    { id: 'ks', text: 'کار5' },
    { id: 'ksg', text: 'کار5' },
    { id: 'kw', text: 'کار5' },
    { id: 'kr', text: 'کار5' },
    { id: 'kg', text: 'کار5' },
]

function Renderresult( ) {
    const [tasks, seTtasks] = useState(initial_tasks);
    const [searchquery, seTsearchquery] = useState('');


    // const resultSearch = tasks.filter((item) => item.text.startsWith(Event.target.value));

    console.log(searchquery);
    function rendermain() {
      

        tasks.map((tasks) =>
            <Todos
                ondelete={handleDelete}
                items={tasks}
                key={tasks.id}
                taskId={tasks.id}

            />)
    }


    function handleDelete(id) {
        const deletetask = tasks.filter((item) => { return item.id !== id });
        seTtasks(deletetask)
    }

    return (
        <>
            {rendermain()}
        </>
    )
}
export default Renderresult