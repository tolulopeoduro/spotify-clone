import classes from './Main.module.scss'
import React from 'react'
import Home from '../Home/Home'

const Main = () => {
    return (
        <div className = {classes.Main}>
            <Home/>
        </div>
    )
}

export default Main
