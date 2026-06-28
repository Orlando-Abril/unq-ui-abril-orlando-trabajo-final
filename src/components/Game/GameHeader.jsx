const GameHeader = () => {
    return (
        <header className="game-header">
            <div>
                <p className="game-kicker">Trabajo Final Integrador</p>
                <h1>Palabras Encadenadas</h1>
            </div>

            <p>
                Escribí palabras válidas en español, encadenalas por la última letra
                y sumá la mayor cantidad de puntos antes de que termine el turno.
            </p>
        </header>
    );
};

export default GameHeader;