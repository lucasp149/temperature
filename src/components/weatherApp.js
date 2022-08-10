import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import Loading from "./loading"
import Error from "./error"
import styles from "./weatherApp.module.css"

export default function WeatherApp() {

    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadInfo();
    }, [])

    useEffect(() => {
        document.title = `Weather - ${weather?.location.name ?? "..."}`;
    }, [weather])

    async function loadInfo(city = 'london') {
        try {
            const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
            const json = await request.json();
            if (request.status === 200) {
                setError(false);
                setWeather(json);
                console.log(json);

            }
            else {
                setWeather(null);
                setError(true);
                console.log(weather);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    function handleChangeCity(city) {
        setWeather(null);
        loadInfo(city);
    }
    
     if (error) {
        return (
            <div className={styles.weatherContainer}>
                <><WeatherForm onChangeCity={handleChangeCity} /><Error /></>
            </div>
        )
    }

    return (
        <div className={styles.weatherContainer}>
           
            <WeatherForm onChangeCity={handleChangeCity} />
            {error && <Error/>}
            {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}



        </div> /* location dentro de weather es una propiedad opcional (?). Si no se aclara eso va a tirar error apenas cargue */
    );
}
