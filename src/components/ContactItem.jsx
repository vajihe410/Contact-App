import React from 'react'
//Styles
import styles from './ContactItem.module.css'

function ContactItem({data , removeHandler}) {
  
  return (
    <li  className={styles.contact}>
        <p>{data.name} {data.lastName}</p>
        <p> <span>&#128231;</span>{data.email}</p>
        <p><span>&#128222;</span>{data.phone}</p>
        <button onClick={() => removeHandler(data.id)}><span>🗑</span></button>
    </li>
  )
}

export default ContactItem