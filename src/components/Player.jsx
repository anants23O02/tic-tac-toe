import React, { useState, useEffect } from 'react';
// import Name from './Name.jsx'
export default function Player({ playername, active }) {
  // Initialize state
  const [editing, setEditing] = useState(false);
  const [editbtn, setEditbtn] = useState('Save');
  const [name,setName] = useState(playername);
  function handleInput(event) {
    setName(event.target.value);
  }
  const playerBtnHandler = () => {
    setEditing((prevEditing) => !prevEditing); 
    editing ? setEditbtn('Edit') : setEditbtn('Save')
  };
  return (
    <>
      <span className="player" >
        {editing ? <input  required value={name} onChange={handleInput} type="text" />: <span className='player-name'>{name}</span> }
        <span className="player-symbol">X</span>
      </span>
      <button onClick={playerBtnHandler}>{editbtn}</button>
    </>
  );
}
