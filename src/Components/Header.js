import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                   
                    <Link to ="/login" className="navbar-brand text-white">
                        { this.props.branding}
                    </Link>
                    <ul className="navbar-nav"  >  
                        <li className="nav-item text-white">
                        <Link to="/" className="nav-link text-white">
                                Home
                          </Link>
                        </li>

                        <li className="nav-item text-white">
                        <Link to="/jobs" className="nav-link text-white">
                                Jobs
                          </Link>
                        </li>
                    </ul>
                 </nav>
            </div>
        )
    }
}
