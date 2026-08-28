"use client"
import { useState, useEffect } from "react"
import styles from "./Navbar.module.css"

export default function Navbar() {

    const [active, setActive] = useState("inicio")
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    }

    useEffect(() => {

        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });

            },
            {
                threshold: 0.4
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {

            sections.forEach((section) => {
                observer.unobserve(section);
            });
        }
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="./img/logo-pizza.webp" alt="Logo Pizzas Flow" />
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
                        <li>
                            <a
                                href="#inicio"
                                className={active === "inicio" ? styles.selected : ""}
                                onClick={closeMenu}
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#promociones"
                                className={active === "promociones" ? styles.selected : ""}
                                onClick={closeMenu}
                            >
                                Promociones
                            </a>
                        </li>
                        <li>
                            <a
                                href="#menu"
                                className={active === "menu" ? styles.selected : ""}
                                onClick={closeMenu}
                            >
                                Menu
                            </a>
                        </li>
                        <li>
                            <a
                                href="#servicios"
                                className={active === "servicios" ? styles.selected : ""}
                                onClick={closeMenu}
                            >
                                Servicios
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}