import { useState } from "react"

const Nav = () => {

    const [hash, setHash] = useState("#")
    const [Nav, setNav] = useState("none")

    const openNav = () => {
        setNav("flex")
    }

    const closeNav = () => {
        setNav("none")
    }

    return (
        <nav class="nav_wrap">
            <p class="logo">Company logo</p>
            <button class="harmburger" onClick={openNav}><i class="bi bi-list"></i></button>

            <div class="mob_wrap" style={{ display: Nav }}>
                <div class="mob_nav "  >
                    <span class="close_nav" onClick={closeNav}>close</span>
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