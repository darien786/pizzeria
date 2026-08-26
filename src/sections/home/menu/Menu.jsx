import styles from "@/sections/home/menu/Menu.module.css"

export default function Menu(){

    return(
        <section className={styles.menu}>
            <div className={styles.container}>
                <p className={styles.title}>Menú</p>
                <div className={styles.buttons}>
                    <button className={styles.btnPizza}>
                        <img src="./img/icons/pizza.png" alt="" width={150}/>
                        Pizzas
                    </button>
                    <button className={styles.btnChicken}>
                        <img src="./img/icons/fried-chicken.png" alt="" width={150}/>
                        Alitas
                    </button>
                    <button className={styles.btnHotdog}>
                        <img src="./img/icons/hot-dog.png" alt="" width={150}/>
                        Hot Dogs
                    </button>
                    <button className={styles.btnPotatoes}>
                        <img src="./img/icons/fried-potatoes.png" alt="" width={150}/>
                        Papas
                    </button>
                    <button className={styles.btnHamburguer}>
                        <img src="./img/icons/burger.png" alt="" width={150}/>
                        Hamburguesas
                    </button>
                    <button className={styles.btnFrappes}>
                        <img src="./img/icons/frappe.png" alt="" width={150}/>
                        Frappes
                    </button>
                </div>
            </div>
        </section>
    )
}