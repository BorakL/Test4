import React from 'react'
import {getCountriesByRegion} from './../services.js'

const Select = ({setCountries, setVisibility})=>{
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
    return(
        <select onChange={(e)=>
            {getCountriesByRegion(e.target.value).then(res=>setCountries(res.data));
            setVisibility("true")}
            }>
            {regions.map(r => <option value={r}>{r}</option>)}
        </select>
    )
}

export default Select