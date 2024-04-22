import React from 'react'


export default function Navbar(props) {

    return (
        <div style={props.mode}>
            <nav className= {`navbar navbar-expand-lg bg-${props.mode} border-bottom`} style={props.mode}>
                <div className="container-fluid">
                    <a className="navbar-brand "style={props.mode}  href="/">TextiSight</a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="" aria-controls="" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    {/*______________ this above section controls the toggle of collapsing navmenu ______________ */}

                    <div style={props.mode} className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div style={props.mode} className="navbar-nav">
                            <a style={props.mode} className="nav-link active" aria-current="page" href="/">Home</a>
                            {/* <a style={props.mode} className="nav-link" href="/">Features</a>
                            <a style={props.mode} className="nav-link" href="/about">About</a> */}

                        </div>
                    </div>
                    <div className="form-check form-switch me-5" id="theme">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.action} />
                    </div>
                </div>


            </nav>
        </div>
    )
}
