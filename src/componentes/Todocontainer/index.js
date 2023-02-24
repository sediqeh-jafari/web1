import { useState } from 'react'
import './style.css'
import Header from '../Header';
import Todos from '../Todos';
import Footer from '../Footer';
import { useContext } from 'react';
import { themecontex } from '../App';
import withTheme from '../../withTheme'

const initial_tasks = [
  { id: 'a', text: 'کار1' },
  { id: 'b', text: 'کار2' },
  { id: 'c', text: 'کار3' },
  { id: 'g', text: 'کار4' },
  { id: 'k', text: 'کار5' },

]
function Todocontainer() {

  const themeObject = useContext(themecontex);
  const [searchquery, seTsearchquery] = useState('');
  const [tasks, seTtasks] = useState(initial_tasks);
  const [newtaskname, setnewtaskname] = useState('');
  const [HasError, setHasError] = useState(false)


  const resultSearch = tasks.filter((item) => item.text.toLowerCase().startsWith(searchquery.toLowerCase()));


  function handlechange(e) {
    seTsearchquery(e.target.value)
  }

  function handleDelete(id) {
    const deletetask = tasks.filter((item) => { return item.id !== id });
    seTtasks(deletetask)
  }
  function rendermain() {
    if (resultSearch.length === 0) {
      return <p>No results found</p>

    }
    return resultSearch.map((tasks) =>
      <Todos
        ondelete={handleDelete}
        items={tasks}
        key={tasks.id}
        taskId={tasks.id}

      />)
  }

  function handleSubmite(e) {
    e.preventDefault()
    if (!newtaskname || newtaskname.length === 0) {
      setHasError(true)
      return
    }

    const taskscopy = [...tasks]
    taskscopy.push({ id: Math.floor(Math.random() * 1000), text: newtaskname })
    seTtasks(taskscopy)
    setnewtaskname('')
  };

  function handle_form_change(e) {
    setHasError(false);
    setnewtaskname(e.target.value)
  }

  function handleClick_right() {
    setnewtaskname('')
    setHasError(false)

  }


 
  return (
    <div className= { withTheme("parent", themeObject.theme) }>
      <Header title={handlechange} />
      {rendermain()}
      <Footer
        onSubmit={handleSubmite}
        onchange={handle_form_change}
        handleClick_right={handleClick_right}
        title={HasError && <p className='ERROR '>cant add empety task.</p>}
        name={newtaskname}
        mh={initial_tasks}
      />

    </div>
  )


}

export default Todocontainer



