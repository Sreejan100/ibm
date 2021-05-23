import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import HeaderOptions from './HeaderOptions'

import React from 'react'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="data:image/jpeg;base64,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" alt=""/>
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="What are you looking for?" type="text"/>
                </div>
            </div>
             <div className = "header__center">
                 <HeaderOptions Icon={HomeIcon}/>
                 <HeaderOptions Icon={PeopleIcon}/>
                 <HeaderOptions Icon={WorkIcon}/>
                 <HeaderOptions Icon={FindInPageIcon}/>
             </div>
            <div className="header__right">
                <HeaderOptions Icon={PersonIcon}/>
                <HeaderOptions Icon={MessageIcon} />
                <HeaderOptions Icon={NotificationsIcon} />
                <HeaderOptions  title='Me' avatar="true"
               />
            </div>
        </div>
    )
}

export default Header
