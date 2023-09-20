import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
    const navigate=useNavigate();
    const red=()=>{
        navigate("/")
    }
  return (
    <>
      <div class="about_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-md-8 mx-auto">
                  <div class="about_taital_main">
                     <div class="about_taital">404 Error -Page Not Found</div>
                     <button onClick={red} className='btn btn-danger'>Go to Home Page</button>
                  </div>
               </div>
               
            </div>
         </div>
      </div>
    </>
  )
}

export default ErrorPage
