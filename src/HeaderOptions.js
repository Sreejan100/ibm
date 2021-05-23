import React from 'react'
import './HeaderOptions.css'
import {Avatar} from '@material-ui/core'
function HeaderOptions({avatar,Icon,onClick}) {
    return (
        <div>
            <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && <Avatar className="headerOption__icon"></Avatar>}
         </div>
        </div>
    )
}

export default HeaderOptions
