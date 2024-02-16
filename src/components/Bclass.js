import React, { useState } from 'react';

export default function Bclass() {
  const [user, setUser] = useState({
    name: "",
    password: "",
    date: "",
    source: "",
    destination: "",
    seats: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(user); // For example, you can log the user object
  };
  let name,value;
  const handle=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})
    console.log(user)

  }

  return (
    <div className="plane">
      <form onSubmit={handleSubmit}>
        Name <input name="name" value={user.name} onChange={handle} type='text'  autoComplete="off" placeholder='enter your name' /><br /><br />
        Password <input name="password" value={user.password} type="password" autoComplete="off" onChange={handle} /><br /><br />
        Date of journey <input type="date" value={user.date}  autoComplete="off" onChange={handle} name="date" /><br /><br />
        Source <select name="source"  onChange={handle} value={user.source}>
          <option value="">--Please choose an option--</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Chennai">Chennai</option>
          {/* Add other options */}
        </select><br /><br />
        Destination <select name="destination" value={user.destination} autoComplete="off" onChange={handle}>
          <option value="">--Please choose an option--</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Chennai">Chennai</option>
          {/* Add other options */}
        </select><br /><br />
        Seats <input name="seats" value={user.seats}  autoComplete="off" type="number" min={1} max={5} onChange={handle} /><br /><br />
        <input name="submit" type="submit" value="Submit" /><br /><br />
      </form>
    </div>
  );
}
