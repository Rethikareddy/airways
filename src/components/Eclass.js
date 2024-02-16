import React from 'react'

export default function Eclass() {
  return (
    
    <div className="plane">
      <form >
        
           
           Name   <input type='text' id="name" placeholder='enter youe name'/><br></br><br></br>
           Password  <input type="password" id="pwd"/><br></br><br></br>
           
           Date of journey <input type="date" id="date"/><br></br><br></br>
           
           source <select name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="dog">H</option>
    <option value="cat">C</option>
    <option value="hamster">H</option>
    <option value="parrot">Pakisthan</option>
    <option value="spider">Spain</option>
    <option value="goldfish">Gujarat</option>
</select> <br></br><br></br>
Destination  <select name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="dog">Hyderabad</option>
    <option value="cat">Chennai</option>
    <option value="hamster">Haryana</option>
    <option value="parrot">Pakisthan</option>
    <option value="spider">Spain</option>
    <option value="goldfish">Gujarat</option>
</select><br></br><br></br>
seats <input type="number" min={1} max={5} id="seat"/><br></br><br></br>
submit <input type="submit"/><br></br><br></br>


      </form>




    </div>
    
    
  
  );
}
