import "./ItemListConteiner.css"

const ItemListConteiner = (props) => {
    const imgConstruccion = "https://andreatanghetti.github.io/Proyecto-js/img/Website%20Creator-amico.png";
    const texto = {
        h2: "¡Ups!",
        p1: "¡Página en construcción!",
        p2: "Primer Pre-entrega: Andrea Tanghetti",
    }
    return (
        <>
            <h1>{props.greeting}</h1>
            <section className="construccion">
                <div className="texto">
                    <h2>{texto.h2}</h2>
                    <p>{texto.p1}</p>
                    <p>{texto.p2}</p>
                </div>
                <img className="imagen" src={imgConstruccion} alt="Imagen pagina en construccion" />
            </section>
        </>
    )
}

export default ItemListConteiner