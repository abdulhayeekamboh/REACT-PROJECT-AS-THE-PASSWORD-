import React from 'react'
import { useState } from 'react'

const App = () => {

  const [password, setpassword] = useState('')

 const pass = import.meta.env.VITE_APP_HEY;

  const open =()=>{

    if (password === ''){
      alert("please fill the password first");
      return;
    }


    if (password === pass){

      const file = 'hello.txt';

      const link = document.createElement('a');
      link.href = file;
      link.download = 'note';
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link);

    }else {
      alert("invalid password!")
    }
  }

  return (
    <>
    <div className="page">
      <div className="card">
        <div className="image">
          <img src="https://images.unsplash.com/photo-1724275524667-af140d510c41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" alt="" />
        </div>
        <div className="container">
          <h1>First Enter Your Password</h1>
          <input type="text" 
          placeholder='enter your password'
          onKeyDown={(e)=>{
            if (e.key === 'Enter'){
              open();
            }
          }}
          id='input'
          value={password}
          onChange={(e)=>{
            setpassword(e.target.value);
          }}
          />
          <button onClick={open}>Download</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App