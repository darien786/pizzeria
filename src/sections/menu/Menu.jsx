import styles from "./Menu.module.css"

export default function Menu(){

    return(
        <section id="menu" className={styles.menu}>
            <div className={styles.container}>
                <p className={styles.title}>Menú</p>
                <div className={styles.buttons}>
                    <button className={styles.btnPizza}>
                        <img src="./img/icons/pizza.webp" alt="Icono Pizzas" width={150}/>
                        Pizzas
                    </button>
                    <button className={styles.btnChicken}>
                        <img src="./img/icons/fried-chicken.webp" alt="Icono Alitas" width={150}/>
                        Alitas
                    </button>
                    <button className={styles.btnHotdog}>
                        <img src="./img/icons/hot-dog.webp" alt="Icono Hot dogs" width={150}/>
                        Hot Dogs
                    </button>
                    <button className={styles.btnPotatoes}>
                        <img src="./img/icons/fried-potatoes.webp" alt="Icono papas fritas" width={150}/>
                        Papas
                    </button>
                    <button className={styles.btnHamburguer}>
                        <img src="./img/icons/burger.webp" alt="Icono Hamburguesas" width={150}/>
                        Hamburguesas
                    </button>
                    <button className={styles.btnFrappes}>
                        <img src="./img/icons/frappe.webp" alt="Icono Frappe's" width={150}/>
                        Frappes
                    </button>
                </div>
            </div>
        </section>
    )
}