import '/src/App.css'
import { useState } from "react";
import { SignUp } from "./auth/SignUp.jsx";

export function Header() {
    const [openModal, setOpenModal] = useState(false)

    return (
        <header className="header">
            <img className="logo" src="/images/logo.svg" alt=""/>

            <nav className="navbar">
                <div className="navbar-item">Home</div>
                <div className="navbar-item">Episodes</div>
                <div className="navbar-item">About</div>
                <div className="navbar-item">Contact</div>
                <div className="navbar-item">Sign in</div>
                <button onClick={() => setOpenModal(true)} className="btn">Sign up</button>
                <SignUp open={openModal} onClose={() => setOpenModal(false)}/>
            </nav>
        </header>
    )
}