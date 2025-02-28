import {useState} from 'react'

function Profile() {
    const [name, setName] = useState(" ");
    const [age, setAge] = useState(18);
  return (
    <div>
     <input type="text" placeholder = "Enter name" onChange= {(e) => setName(e.target.value)} />
     <input type="number" placeholder = "Enter age" onChange= {(e) => setAge(e.target.value)} />

     <p>Name: {name}</p>
     <p>Age: {age}</p>
    </div>
  )
}

export default Profile
