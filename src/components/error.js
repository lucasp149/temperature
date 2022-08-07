import style from "./error.module.css"

export default function Error() {
    return (
        <div className={style.cont}>
            <h1>No se encontró tu ciudad :(</h1>
            <p>Intentá nuevamente!</p>
        </div>
    )
}