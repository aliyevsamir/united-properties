import React from 'react'
import './Logo.scss'
import {ReactComponent as LogoIcon} from '../../assets/svgs/logo.svg'

const Logo = () => {
    return (
        <div className='Logo'>
            <LogoIcon />
        </div>
    )
}

export default Logo
