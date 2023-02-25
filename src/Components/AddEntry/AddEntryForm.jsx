import React, { useState } from 'react';


const AddEntryForm = (props) => {

    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            weight: weight,
            date: date
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            <div className = 'form-group'>
                <label>Weight</label>
                <input type='number' className="form-control" value = {weight} onChange ={(event)=> setWeight(parseFloat(event.target.value))}/>
            </div>
            <div className ='form-group'>
                <label>Date</label>
                <input type='date' value={date} class="form-control" onChange ={(event)=> setDate(event.target.value)}/>
            </div>
            
            <button type ='submit'  class="btn btn-primary" style={{'margin-top': '1em'}}>Add</button>
        </form>
     );
}
 
export default AddEntryForm;