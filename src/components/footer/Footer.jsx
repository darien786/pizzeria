import styles from "./Footer.module.css"

export default function Footer() {

    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="./img/logo-pizza.webp" alt="Logo pizzas flow" width={70} />
                    <p>Pizzas <span>Flow</span></p>
                </div>
                <div className={styles.contact}>
                    <div className={styles.phone}>
                        <img src="./svg/phone.svg" alt="Icono telefono" width={35}/>
                        <p>+52-22-82-22-33</p>
                    </div>
                    <div className={styles.mail}>
                        <img src="./svg/mail.svg" alt="Icono correo" width={35}/>
                        <p>pizzasflow@gmail.com</p>
                    </div>
                </div>
                <div className={styles.socialContainer}>
                    <div className={styles.line}>

                    </div>

                    <div className={styles.socials}>
                        <img src="./svg/facebook.svg" alt="Icono Facebook" width={30}/>
                        <img src="./svg/instagram.svg" alt="Icono Instagram" width={35}/>
                        <img src="./svg/whats.svg" alt="Icono WhatsApp" width={35}/>
                    </div>

                    <div className={styles.line}></div>
                </div>
            </div>
            <div className={styles.autor}>
                <p>@2026. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}