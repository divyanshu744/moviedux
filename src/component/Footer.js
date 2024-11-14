import React from "react";
import '../styles.css';

export default function Footer(){
    const currentdate = new Date().getFullYear();
    return(
        <footer className="footer">
            <p className="footer-text">
            ©{currentdate} Movidux , all rights reserved

            </p>
        </footer>
    )
}