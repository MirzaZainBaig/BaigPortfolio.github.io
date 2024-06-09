import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">About Page</li>
        <li className="sidenavLi">Resume Page</li>
        <li className="sidenavLi">Project Page</li>
        <li className="sidenavLi">Contact Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Railway E-Ticket System</li>
        <li className="sidenavLi">My Tunes</li>
        <li className="sidenavLi">Tribute Website</li>
        <li className="sidenavLi">Restraunt</li>
        <li className="sidenavLi">Math Mind</li>
        <li className="sidenavLi">Amazon Clone</li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+92 3476982109</li>
        <li className="sidenavLi">zanm4057@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav