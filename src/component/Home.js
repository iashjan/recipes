import React from 'react'



const Home = () => {
    return (
        <div>
<nav  class="navbar navbar-light bg-light">
  <a class="navbar-brand">Today Recipe ?</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
            <img className="img" src="https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=100"  />
        </div>
    )
}

export default Home
