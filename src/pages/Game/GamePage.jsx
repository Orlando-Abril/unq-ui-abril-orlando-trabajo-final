import AppLayout from "../../components/Layout/AppLayout.jsx";
import GameHeader from "../../components/Game/GameHeader.jsx";
import GameEstadisticas from "../../components/Game/GameEstadisticas.jsx";
import WordInput from "../../components/Game/WordInput.jsx";
import WordChain from "../../components/Game/WordChain.jsx";
import GameMessage from "../../components/Game/GameMessage.jsx";
import GameMejoresPuntajes from "../../components/Game/GameMejoresPuntajes.jsx";
import GameOverSummary from "../../components/Game/GameResumenFinal.jsx";
import { useWordChainGame } from "../../hooks/useWordChainGame.js";
import "./GamePage.css";
import GameActions from "../../components/Game/GameActions.jsx";


const GamePage = () => {
    const {
        words,
        score,
        lastWord,
        nextLetter,
        message,
        remainingTime,
        leaderboardScores,
        isValidating,
        isGameStarted,
        isGameOver,
        submitWord,
        restartGame,
    } = useWordChainGame();

    return (
        <AppLayout>
            <main className="game-page">
                <GameHeader />

                <section className="game-board">
                    <div className="game-main-panel">
                        <GameEstadisticas
                            score={score}
                            wordsCount={words.length}
                            remainingTime={remainingTime}
                        />

                        <GameActions
                            canRestart={isGameStarted || words.length > 0}
                            onRestart={restartGame}
                        />

                        <section className="current-turn-card">
                            <span>{lastWord ? "Última palabra" : "Inicio de partida"}</span>
                            <strong>{lastWord || "Primera palabra"}</strong>
                            <p>
                                {nextLetter
                                    ? "La próxima palabra debe comenzar con"
                                    : "Ingresá cualquier palabra válida para comenzar"}
                                {nextLetter && <b> {nextLetter.toUpperCase()}</b>}.
                            </p>
                        </section>

                        {isGameOver && (
                            <GameOverSummary
                                score={score}
                                wordsCount={words.length}
                                onRestart={restartGame}
                            />
                        )}

                        {!isGameOver && (
                            <WordInput
                                nextLetter={nextLetter}
                                isValidating={isValidating}
                                isGameOver={isGameOver}
                                onSubmitWord={submitWord}
                            />
                        )}

                        <GameMessage message={message} />

                        <WordChain words={words} />
                    </div>

                    <GameMejoresPuntajes scores={leaderboardScores} />
                </section>
            </main>
        </AppLayout>
    );
};

export default GamePage;