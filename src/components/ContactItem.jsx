import React from 'react'

function ContactItem({data , removeHandler}) {
  
  return (
    <li key={data.id}>
        <p>{data.name} {data.lastName}</p>
        <p> <span>&#128231;</span>{data.email}</p>
        <p><span>&#128222;</span>{data.phone}</p>
        <button onClick={() => removeHandler(data.id)}>🗑</button>
    </li>
  )
}

export default ContactItem