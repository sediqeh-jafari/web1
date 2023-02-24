import './style.css'



function Header({title}) {
    return (
        <div className='header'>

            لیست کارها
            <input className='input_header' onChange={title} placeholder='جستجوی کار...' type='text' ></input>


        </div>
    )

}

export default Header

















