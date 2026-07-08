const GameResumenFinal = ({ score, wordsCount, onRestart }) => {
    const wordsLabel = wordsCount === 1 ? "palabra encadenada" : "palabras encadenadas";

    return (
        <section className="game-over-card" aria-live="polite">
            <span className="game-over-flag">Game Over</span>
            <strong className="game-over-score">{String(score).padStart(3, "0")}</strong>
            <p>{wordsCount} {wordsLabel}</p>

            <button type="button" onClick={onRestart}>
                Jugar de nuevo
            </button>
        </section>
    );
};

export default GameResumenFinal;
