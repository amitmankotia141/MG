import React from 'react'
import './Navbar.css'
export default function Navbar(){
return (
<>
<nav className=" navbar bg-light">
<button type="submit" className="btn" id="lol">
<b>Dashboard</b>
</button>
</nav>
<button type="button" className="void">
<span className="material-icons-outlined">format_list_bulleted</span>
</button>
<button type="button" className="spark">
<span className="material-icons" id="adam">
person
</span>
</button>
<div className="go">
<img src="./MG-non.svg" alt="list" id="low" />
<div className="scrollbar">
<button type="button" className="zoro">
<ion-icon name="reader-outline"></ion-icon>
<span className="doll">
<b>DASHBOARD</b>
</span>
</button>
<button type="button" className="zoro">
<ion-icon name="file-tray-stacked-outline"></ion-icon>
<span className="doll">
<b>SCOPE OF IMPROVEMENTS</b>
</span>
</button>
<button type="button" className="zoro">
<ion-icon name="map-outline"></ion-icon>
<span className="doll">
<b>TREND</b>
</span>
</button>
<button type="button" className="zoro" id='hood'>
<ion-icon name="reader-outline"></ion-icon>
<span className="doll">
<b>DEALER POINTS</b>
</span>
</button>
<button type="button" className="zoro" id='con'>
<ion-icon name="git-compare-outline"></ion-icon>
<span className="doll">
<b>DEALER SUMMARY</b>
</span>
</button>
<button type="button" className="zoro" id='grunt'>
<ion-icon name="reader-outline"></ion-icon>
<span className="doll">
<b>VOICE OF CUSTOMER</b>
</span>
</button>
<button type="button" className="zoro" id='con'>
<ion-icon name="newspaper-outline"></ion-icon>
<span className="doll">
<b>ACTION PLANNING</b>
</span>
</button>
<button type="button" className="zoro" id='poll'>
<ion-icon name="easel-outline"></ion-icon>
<span className="doll">
<b>ADMIN</b>
</span>
</button>
<div className='tell'>
<span className="gross">Powered by</span>
<img src="./pre.png" alt="mon" className='won'/>
<span className='bolt'>ver: 2.0.0</span>
</div>
</div>
</div>
</>
)
}