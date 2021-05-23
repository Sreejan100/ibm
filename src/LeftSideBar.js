import React from 'react'
import './LeftSideBar.css';
import {Avatar} from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


function LeftSideBar() {
   
 

    return (
        <div className="SideBar">
              <div className="sidebar__top">
                   <h3 className="recent__post">Recent Post</h3>
                    <div className="sidebar__recentitem">
                        <img className="janepic" src="https://pbs.twimg.com/profile_images/1035404905337573376/I8ivxZqh_400x400.jpg" alt=""/>
                        <p className="janename">Jane Cooper</p>
                    </div>
                    <div className="sidebar__recentitem">
                        <img className="janepic" src="https://pbs.twimg.com/profile_images/1100866378586714112/7C-Asgzb_400x400.jpg" alt=""/>
                        <p className="janename">Jenny Wilson</p>
                    </div>
                    <div className="sidebar__recentitem">
                        <img className="janepic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1200px-Dell_logo_2016.svg.png" alt=""/>
                        <p className="janename">Dell</p>
                    </div>
                    <div className="sidebar__recentitem">
                        <img className="microsoft" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAALVBMVEXyUCJ/ugAApO//uQD////yTh/zVy2EvRYWp/D/uxbyTBvzXziJvyQkq/D/viRJQpTmAAABDUlEQVR4nO3PyRHCQBAEwRHo5vDfXD1ZC5oYyHKgIqtSLev8aZtixYCEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIQdhUuq81vCNdZjED63WDX/eoT9I+wfYf8I+0fYv9pjvYbt+4hVt1j7IDzusQgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQn/WXgB6/1wCkBWrdwAAAAASUVORK5CYII=" alt=""/>
                        <p className="janename">Microsoft</p>
                    </div>
                    <div className="sidebar__recentitem__see">
                          <KeyboardArrowDownIcon className="keyboarddown"/>
                          <p className="keytext">See More</p>
                    </div>
              </div>
              <div className="sidebar__top">
                   <h3 className="recent__post">Groups</h3>
                    <div className="sidebar__recentitem">
                        <img className="janepic" src="data:image/png;base64,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" alt=""/>
                        <p className="janename">WordPress Developer</p>
                    </div>
                    <div className="sidebar__recentitem">
                        <img className="janepic" src="data:image/jpeg;base64,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" alt=""/>
                        <p className="janename">Dribbble Community</p>
                    </div>
                    <div className="sidebar__recentitem">
                        <img className="janepic" src="data:image/jpeg;base64,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" alt=""/>
                        <p className="janename">UI/UX Designers</p>
                    </div>
                    <div className="sidebar__recentitem">
                        <img className="janepic" src="data:image/png;base64,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" alt=""/>
                        <p className="janename">GiTHub Members</p>
                    </div>
                    <div className="sidebar__recentitem__see">
                          <KeyboardArrowDownIcon className="keyboarddown"/>
                          <p className="keytext">See More</p>
                    </div>
              </div>
              <div className="sidebar__top">
                   <h3 className="recent__post">Hashtags</h3>
                    <div className="sidebar__recentitem">
                        <img className="janepic" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUAAAD////MzMzj4+O3t7fx8fGmpqaysrKOjo7Gxsa9vb38/PypqamsrKzu7u5ra2vc3Nx4eHglJSXS0tIQEBBgYGBFRUXCwsJMTEw3Nzeenp4bGxtYWFiCgoLf39+YmJiGhoYxMTEiIiJUVFR0dHQNDQ2QjkL6AAADdklEQVR4nO3c61LiQBCGYQYIIQQ0KoiALLC693+LKx4ZyImkU92J7/NXquyvksxMegZ6PQAAAAAAAAAAAAAAAAAAAAAA0C3zl7l2CU3aRoFzz9pVNGYzdO9utQtpymc+5xbalTTjzn171K6lEcufgE67lkYMTgLG2sU0ITgJ6CLtahpwegWdG2uXI2/iBezgY3jrB+xr1yMv9hN2bzac+gEH2vXI8wN2cFE68gMuteuR5z+FHZztF/4lfNKuR97MC3inXU4DvOXMXruaJpwG7OSb7+Yn381Ku5hGHL4DrrVLacjqM1+oXUhj3u7SeBB28gHspsV4FIazcfbLw/NukgQuGEThuH3dqKfwZOZL1veXn9j3/eVN1Krpf3xz9gbhkq33gcXy/ANHU6Vyr7aN08p3w687cbMOUj/Qljnk75+s8l0we129rJPMv7tWrANu8+ovw/rjuK4b0LmddoZcYf2Athuoo+Lyy7C75tnKBHTO6nDzKBUwsNqAu5jmKzK7VSP0ENodSzfFtZey1w6SKXWleT27U4XQJTT88j8trr4Ey/s06e8T10p5j7RiUVx9CSPtGDmGxeUXM71PIzLbm50J38wlApo+s3BXXH4x02cWRFZsdif73sURmWoMTxXnp5yqMT2Sisz3ltczF0dIKjH7WvhOIuFEO0QuEpLw6EE7RC6JhIF2iFwSCU0vS2USmt4HlljT2N48jCQSJtop8ojsOZleeu9EElrex5dpRJkeTWUSGu4H9zJPV1zH8IQhMpg6d6OdI5vMUGO5G7UqLr4cu4+izL6F5Ygi3bZ3Vm/UV7GEZk9+ySW0ugclNF98iC32v2sf2fNpx0kjGtBk83RWXHd5Jo+23QsGNLqH0S+uvCybg2nvRS6hdpQsIv2oI7Ptb6E3fcsNm+xj+lcx/PVnoSfR7iUUGk5n2inySJxQNDoXfhHoZmyL/4uq2jOG6d7+0aFuwn/aCQrt6wW0/rWno4c6Aa02aXw12m62d7q/PVVP2JZfAqn8KFrszqSruGE61K77CpVWb7YP1JxLjxgP+lHUH6QPRe0KmHZ4P9kdvv542F0ufdp0i37wj37Hs7NXotXZRkcbZvpz85/LmKSupk8upNHOU7HdMkkehuPMn0K+34eT/mTavZ/dAwAAAAAAAAAAAAAAAAAAAAAAAAAAAPDL/Qd1QiS0LZvdpgAAAABJRU5ErkJggg==" alt=""/>
                        <p className="janename">#Apple</p>
                    </div>
                    <div className="sidebar__recentitem">
                        <img className="janepic" src="https://i.pinimg.com/280x280_RS/e9/f7/e1/e9f7e101e3b7484d53b2b4d5a6004740.jpg" alt=""/>
                        <p className="janename">#Behance</p>
                    </div>
                    <div className="sidebar__recentitem">
                        <img className="janepic" src="data:image/jpeg;base64,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" alt=""/>
                        <p className="janename">#Youtube</p>
                    </div>
                    <div className="sidebar__recentitem">
                        <img className="janepic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vPGKElPCbRLReJLXxFSYxClWjIXRR409-A&usqp=CAU" alt=""/>
                        <p className="janename">#Amazon</p>
                    </div>
                    <div className="sidebar__recentitem__see">
                          <KeyboardArrowDownIcon className="keyboarddown"/>
                          <p className="keytext">See More</p>
                    </div>
              </div>
             
        </div>
    )
}

export default LeftSideBar
