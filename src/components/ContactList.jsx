import { useState } from "react"
//components
import ContactItem from "./ContactItem"

function ContactList({contacts , removeHandler}) {

  return (
    <>  
        <h3>Contact List</h3>
        {contacts.length ? 
                 (<ul>
                 {contacts.map(contact =><ContactItem key={contact.id} data={contact} removeHandler={removeHandler}/> )}
              </ul>)
              :
              <p>No Contacts Yet!</p>
      }
 
    </>
  )
}

export default ContactList