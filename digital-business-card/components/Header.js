import React from "react"

export default function Header() {
    return (
        <header>
            <img src="../images/AmyR.jpg" className="header--img" />
            <h2 className="header--name">Laura Smith</h2>
            <p className="header--job">Frontend Developer</p>
            <p className="header--website">laurasmith.website</p>
        </header>
    )
}