import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" style={{marginLeft: '20px'}} href="/">{props.title}</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft: '1150px'}}>
          <div className={`form-check form-switch text-${(props.mode === "light") ? ("dark") : ("light")}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = { title: PropTypes.string.isRequired }
Navbar.defaultProps = { title: "Sample Title" }

export default Navbar