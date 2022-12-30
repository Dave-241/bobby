import { useState } from "react"

const Nav = () => {

    const [hash, setHash] = useState("#")

    return (
        <nav class="nav_wrap">
            <p class="logo">Company logo</p>
            <button class="harmburger" onclick="openNav()"><i class="bi bi-list"></i></button>

            <div class="mob_wrap" id="sideNav">
                <div class="mob_nav " id="sideBar">
                    <span class="close_nav" onclick="closeNav()">close</span>
                    <a href={hash} class="nav_list">About Us</a>
                    <a href={hash} class="nav_list">Projects</a>
                    <a href={hash} class="nav_list">Case studies</a>
                    <a href={hash} class="nav_list nav_ctn">contact us</a>

                </div>
            </div>
        </nav>
    )
}

export default Nav;