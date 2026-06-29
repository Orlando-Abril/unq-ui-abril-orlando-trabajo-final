const GameMejoresPuntajes = ({ scores }) => {
    return (
        <aside className="leaderboard-card">
            <div className="section-title">
                <h2>Mejores partidas</h2>
                <span>Top 10</span>
            </div>

            {scores.length === 0 ? (
                <p className="empty-leaderboard">
                    Todavía no hay partidas guardadas.
                </p>
            ) : (
                <ol className="leaderboard-list">
                    {scores.map((score, index) => (
                        <li key={`${score.playedAt}-${score.points}`}>
                            <span>#{index + 1}</span>
                            <strong>{score.points} pts</strong>
                            <small>{score.words} palabras</small>
                        </li>
                    ))}
                </ol>
            )}
        </aside>
    );
};

export default GameMejoresPuntajes;