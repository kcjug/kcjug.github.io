import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/kcduke.jpeg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="KC Duke" /></a>
                    <h2><strong>Kansas City JUG</strong></h2>
                    <br />
                    <h3>Fostering the Java&trade; Community in the <br/>greater Kansas City metro since 2017</h3>
                </div>
                <div classname="links">
                    <a href="#about">About KC JUG</a><br/>
                    <a href="#events">KC JUG Events</a><br/>
                    <a href="#interact">Get Involved</a><br/>
                    <a href="#sponsor">Sponsor KC JUG</a><br/>
                    <a href="#contact">Contact Us</a>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
