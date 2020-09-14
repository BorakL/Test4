import React from 'react'

const AddInfo = ({country,visibility})=>{
    var output = ""
    if(visibility=="true") output = `Ime: ${country.name} Populacija: ${country.population}` 

    return(
        <div>
        {output}   
        </div>
    )
}

export default AddInfo 