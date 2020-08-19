import React from "react"
import { Link } from "gatsby"
import Logo from "./logo";

class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                <Link className="navbar-brand" to={'/'}><Logo /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={'/'}>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown-gaming" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Gaming
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/gaming/gta-online">GTA Online</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header
