import classes from './MobileNav.module.scss'
import React from 'react'
import Menubutton from './Menubutton/Menubutton'

const MobileNav = () => {
    return (
        <div className = {classes.MobileNav}>
            <img className = {classes.Logo} src = '/images/spotify-logo-png-7071.png' alt = '' />
            <div className = {classes.NavRight}>
                <img height = '16px' width = '16px' alt = '' src = '/images/search_icon.svg' />
                <button className = {classes.AppLink}>OPEN APP</button>
                <Menubutton active = {false} handleClick = {() => console.log('Hello')} />
            </div>
        </div>
    )
}


export default MobileNav
