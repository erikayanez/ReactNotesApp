import React from 'react'

export default function Header({handleToggleDarkMode}) {
    return (
    <div className='header'>
        <h1>Notes</h1>
        <button className='save' onClick={()=>
        handleToggleDarkMode((previousDarkMode)=> !previousDarkMode)}>ToggleMode</button>

    </div>
    )
}
