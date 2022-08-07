import { useState } from "react";
import styles from "./weatherFrom.module.css";

export default function WeatherForm ({onChangeCity}) {
    const [city,setCity] = useState("");

    function onChange(e){
        const value = e.target.value;
        if(value !== ""){
            setCity(value);
        }
        console.log(value);
    }

    function handleSubmit (e){
        e.preventDefault();
        onChangeCity(city);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" onChange={onChange} />
        </form>
    )
}