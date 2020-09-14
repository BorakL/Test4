import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import { getAllCountries } from './services';
import Select from './components/Select'
import AddInfo from './components/AddInfo'

const App = ()=>{
  const[countries,setCountries] = useState([])
  const[visibility,setVisibility] = useState("false")

  useEffect(()=>{
    getAllCountries().then(res=>setCountries(res.data))
  },[])

  return(
    <>
    <Select setCountries={setCountries} setVisibility={setVisibility}/>

    {countries.map(c=> <div key={c.alpha3Code}> <img src={c.flag} alt="flag" title={c.name} /> <AddInfo country={c} visibility={visibility}/> </div>)}
    
    </>
  ) 
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);