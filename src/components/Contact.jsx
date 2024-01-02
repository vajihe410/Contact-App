import { useState } from "react"
import { v4 } from 'uuid'
//components
import ContactList from "./ContactList";
//js 
import inputs from "../constants/inputs.js";

function Contact() {
const [ alert , setAlert ] = useState("")     
const [ contacts , setContacts ]  = useState([]);  
const [ contact , setContact ] = useState({
    id : "",
    name : "",
    lastName : "",
    email : "",
    phone : "",
});
 const formHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact(contact => ({...contact , [name]:value}))
 }
 const addHandler = () => {
    if(!contact.name || !contact.lastName || !contact.email || !contact.phone){
        setAlert("Please enter valid data! ")
        return
    }
    setAlert("")
    const newContact = {...contact , id : v4()}
    setContacts(contacts => ([...contacts,newContact]));
    setContact({
        name : "",
        lastName : "",
        email : "",
        phone : "",
    })
 };
 const removeHandler = (id) => {
    const newContact = contacts.filter(contact => contact.id !== id)
    setContacts(newContact)
 }
  return (
    <div>
        <div>
            {inputs.map((input,index) => (<input 
             key={index}
             type={input.type}
             name={input.name} 
             placeholder={input.placeholder} 
             value={contact[input.name]} 
             onChange={formHandler}/>))}

            <button onClick={addHandler}>Add Contact</button>
        </div>
        <div>
            {alert && <p>{alert}</p> }
        </div>
        <div>
          <ContactList contacts={contacts} removeHandler = {removeHandler} /> 
        </div>

    </div>
  )
}

export default Contact