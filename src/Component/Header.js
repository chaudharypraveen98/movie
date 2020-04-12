import React from'react'
import PropType from 'prop-types'

const Header=(props)=>{
    <div className="navbar navbar-dark">
        <div className="navbar-brand">
            <img src="../images/logo.png"/>
        </div>
        <div className="nav-title">{props.title}</div>
    </div>
}

Header.defaultProps={
    title:'Title'
}
Header.prototype={
    title: PropType.string
}

export default Header;