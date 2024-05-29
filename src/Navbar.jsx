import React from 'react';

function Navbar() {
  return (
    <div className="nb navbar navbar-expand-md background-color-black">
      <div className="container">
        <a href="#" className="navbar-brand text-light">Pizza House</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link text-white" href="#">Home</a>
            <a className="nav-link text-white" href="#">About Us</a>
            <a className="nav-link text-white" href="#">Contact</a>
          </div>
        </div>
        <form className="form-inline my-2 my-lg-0 d-flex">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-danger my-2 my-sm-0" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
