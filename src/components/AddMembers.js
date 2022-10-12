import React from 'react'
import { useState } from 'react'

export default 
function AddMembers() {
    const[first_name, setFirst_name] = useState('')
    const[phone_no, setPhone_no] = useState('')
    const[email, setEmail] = useState('')
    const[house_no, setHouse_no] = useState('')

    const addMemberToForm = (event) =>{
      event.preventDefault();
      const memberData = {first_name, phone_no, email, house_no}
      event.target.reset();

fetch('https://my-project-data.herokuapp.com/data', {
  method: 'POST',
  header: { 'Content-Type':'application/json' },
  body: JSON.stringify(memberData)
})
.then((res) => res.json())
.then(() =>{
  setFirst_name("")
  setPhone_no("")
  setEmail("")
  setHouse_no("")
})
    }
  return (
    <div className='holding-container'>
  <form className='form' onSubmit={addMemberToForm}>
    
    <p>Name i.e firstname</p>
    <input type="text" value={first_name} 
    required placeholder='Enter your first name' 
    onChange={(event) => setFirst_name(event.target.value)}/>

    <p>Telephone number</p>
     <input type="number" value={phone_no}  
     onChange={(event) => setPhone_no(event.target.value)}/>
    
    <p>Email</p>
     <input type="email" value={email}  
     onChange={(event) => setEmail(event.target.value)}/>
    
    <p>House number</p>
   <input type="text" value={house_no}  
   onChange={(event) => setHouse_no(event.target.value)}/>
   
   <button>Add Member</button>
  </form>  
    </div>
  );
}