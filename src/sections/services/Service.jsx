import styles from "./Service.module.css"

export default function Service(){
    return(
        <section className={styles.service}>
            <div className={styles.container}>
                <p className={styles.title}>Servicios</p>
                <div className={styles.services}>
                    <div className={styles.shopping}>
                        <p className={styles.sTitle}>Envíos</p>
                        <img src="./img/icons/food-delivery.webp" alt="Imagen de envíos" width={300}/>
                        <p className={styles.sDescription}>Envíos a domicilio con costo extra dependiendo de la zona</p>
                    </div>
                    <div className={styles.payment}>
                        <p className={styles.sTitle}>Pagos</p>
                        <img src="./img/icons/online-banking.webp" alt="Imagen de medios de pago" width={300}/>
                        <p className={styles.sDescription}>Pagos en efectivo o por transferencia electrónica</p>
                    </div>
                    <div className={styles.schedule}>
                        <p className={styles.sTitle}>Horarios</p>
                        <img src="./img/icons/clock.webp" alt="Imagen de reloj" width={300}/>
                        <p className={styles.sDescription}>Abrimos de 1 p.m. a 11 p.m.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}