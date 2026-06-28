const GameActions = ({ canRestart, onRestart }) => {
    if (!canRestart) {
        return null;
    }

    return (
        <div className="game-actions">
            <button type="button" onClick={onRestart}>
                Reiniciar partida
            </button>
        </div>
    );
};

export default GameActions;