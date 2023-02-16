import React from 'react'

const UserForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          name='text'
          id='name'
          placeholder='Digite o seu nome'
          required
          onChange={(e) => updateFieldHandler('name', e.target.value)}
          value={data.name || ""}
        />
      </div>
      <div className="form-control">
        <label htmlFor="name">E-mail: </label>
        <input
          type="email"
          name='email'
          id='email'
          placeholder='Digite o seu e-mail'
          required
          onChange={(e) => updateFieldHandler('email', e.target.value)}
          value={data.email || ""}
        />
      </div>
    </div>
  )
}

export default UserForm