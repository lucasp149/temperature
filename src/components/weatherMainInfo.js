import styles from "./weatherMainInfo.module.css"


export default function WeatherMainInfo({ weather }) {
    
    return (
        <div className={styles.contenedor}>
            <div className={styles.titulo}>
                <div className={styles.nameLocation}>{weather?.location.name}</div>
                <div className={styles.nameCountry}>{weather?.location.country}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.icon}>
                    <div></div>
                    <img src={`http:${weather?.current.condition.icon}`} />
                </div>
                <div >
                    <div>{weather?.current.condition.text}</div>
                    <div className={styles.number}>{`${weather?.current.temp_c}°`}</div>
                </div>
            </div>
            <iframe
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d176648.3282394213!2d${weather?.location.lon}4!3d${weather?.location.lat}2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1658094689572!5m2!1ses-419!2sar`} width="100%"  height="480px"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>

    )
    
}