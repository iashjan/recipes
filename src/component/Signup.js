import React, { Component } from 'react'

export default class Singup extends Component {
    render() {
        return (

            <div >
              
                <img src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1auto=formatfit=cropw=631q=80" class="card-img" alt="..." />


<div  className="sgin" class="img bg-light text-darkgrey postion-center">
  <div class="img-img-overlay">
    


  
    <div class="form-row">
    <div class="form-group col-md-6">
     
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" /> 
    </div>
    <div class="form-group">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" />
    </div>
    
    
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign </button>

</div>
</div>
</div>
            
        )
    }

   } 
