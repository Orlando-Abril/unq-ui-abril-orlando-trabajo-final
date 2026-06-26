import AppLayout from "../../components/Layout/AppLayout.jsx";
import "./GamePage.css";

const GamePage = () => {
    return (
        <AppLayout>
            <main className="game-page">
                <section className="game-header">
                    <p className="game-kicker">Trabajo Final Integrador</p>
                    <h1>Palabras Encadenadas</h1>
                    <p>
                        Formá la cadena más larga posible de palabras válidas antes
                        de que se agote el tiempo.
                    </p>
                </section>
            </main>
        </AppLayout>
    );
};

export default GamePage;