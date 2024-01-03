//components
import ContactItem from "./ContactItem"
//Styles
import styles from './ContactList.module.css'

function ContactList({contacts , removeHandler}) {

  return (
    <div className={styles.container}>  
        <h3>Contact List</h3>
        {contacts.length ? 
                 (<ul>
                 {contacts.map(contact =><ContactItem key={contact.id} data={contact} removeHandler={removeHandler}/> )}
              </ul>)
              :
              <p>No Contacts Yet!</p>
      }
 
    </div>
  )
}

export default ContactList