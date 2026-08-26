"use client"
import { useState } from "react"
import styles from "./Navbar.module.css"

export default function Navbar() {
    
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    }
    
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="./img/logo-pizza.webp" alt="Logo Pizzas Flow"/>
                    <p>Pizzas <span>Flow</span></p>
                </div>
                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
                    <ul>
                        <li><a href="#" onClick={closeMenu}>Inicio</a></li>
                        <li><a href="#" onClick={closeMenu}>Promociones</a></li>
                        <li><a href="#" onClick={closeMenu}>Productos</a></li>
                        <li><a href="#" onClick={closeMenu}>Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}