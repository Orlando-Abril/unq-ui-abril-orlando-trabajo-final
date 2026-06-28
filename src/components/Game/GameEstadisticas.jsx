const GameEstadisticas = ({ score, wordsCount, remainingTime }) => {
    const timerStatusClass = remainingTime <= 5
        ? "stat-card-danger"
        : "stat-card-highlight";

    return (
        <section className="game-stats" aria-label="Estado de la partida">
            <article className={`stat-card ${timerStatusClass}`}>
                <span>Tiempo</span>
                <strong>{remainingTime}s</strong>
            </article>

            <article className="stat-card">
                <span>Puntaje</span>
                <strong>{score}</strong>
            </article>

            <article className="stat-card">
                <span>Palabras</span>
                <strong>{wordsCount}</strong>
            </article>
        </section>
    );
};

export default GameEstadisticas;