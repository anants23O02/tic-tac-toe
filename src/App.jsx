import Header from './components/Header.jsx'
import Gamecontainer from './components/Gamecontainer.jsx'
import Log from './components/Log.jsx'
import {useState} from 'react'
function App() {
  //using state to manage highlight
  const [log,setLog] = useState([])
  function logChangeHandle(activePlayer,row,col) {
    // console.log('row,col :>> ',activePlayer,row,col);    
     const newlog = [activePlayer,row,col];
     setLog(prevlog => [...prevlog,newlog]);
  }

  function onRestart() {
    setLog([]);
  }

  return (
    <>
    <Header/>
    <Gamecontainer log ={log} logHandler = {logChangeHandle} onRestart = {onRestart} />
    <Log logs = {log} />
    </>
  )
}

export default App
