import React from 'react'
import {Link} from 'react-router-dom';
import '../App.css'


export default function Nav({data,username}) {
  console.log("navbar values data,username" ,data,username)
  const m=localStorage.getItem("user")
  return (
<>
<nav  class="navbar navbar-expand-lg   text-white  x" >


  
  <div class="container-fluid">
  <Link  class="navbar-brand" to="/">{   m==="superadmin"? <span>Superadmin</span>:<span></span>}</Link>   
  <Link  class="navbar-brand" to="/">{ m==="admin"? <span>Admin</span>:<span></span>}</Link> 
    <Link  class="navbar-brand" to="/">{ m==="normal" ||  m==="admin" ||  m==="superadmin" ? <span>{username}</span>:<span>Username</span>}</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      {  m==="superadmin" || m=="admin" ? <Link class="nav-link" to="/feedbacks">feedbacks</Link>:<span></span> }
        {/* <Link class="nav-link" to="/">Home </Link> */}
        {/* <Link class="nav-link" to="/con">component2</Link>
        <Link class="nav-link" to="/about">Tic</Link> */}
        {m==="normal" ?<Link class="nav-link" to="/feedback">Feedback</Link>:<span></span>}
       {m==="superadmin" || m ==="admin" || m==="normal"?<Link class="nav-link maya" to='/logout'>Logout</Link>:

         <> 
       
       <Link class="nav-link may" to='/login'>Login</Link>
        
        <Link class="nav-link " to='/register'>Register</Link>
        </>
        }
   
      </div>
      
    </div>
  </div>
</nav>

</>
    )
}
