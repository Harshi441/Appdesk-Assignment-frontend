import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  const { logout } = useAuth0();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img className="AppDeskLogo" src="https://rb.gy/kmtqth" width="55" height="55" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>

            {isAuthenticated && (
              <p className='UserName' >
                <img className="AvatarLogo" src="https://rb.gy/aku1zz" alt="" width="25" height="25"></img>
                {user.name}
              </p>

            )}
            {
              isAuthenticated ? (
                <form className="d-flex">
                  <button class="btn btn-primary" onClick={() => logout({ returnTo: window.location.origin })}>
                    Log Out
                  </button>
                </form>
              ) : (
                <form className="d-flex">
                  <button class="btn btn-primary" onClick={() => loginWithRedirect()}>Log In</button>
                </form>
              )
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar