import AppLayout from "../../components/Layout/AppLayout.jsx";
import GameHeader from "../../components/Game/GameHeader.jsx";
import GameEstadisticas from "../../components/Game/GameEstadisticas.jsx";
import WordInput from "../../components/Game/WordInput.jsx";
import WordChain from "../../components/Game/WordChain.jsx";
import GameMessage from "../../components/Game/GameMessage.jsx";
import GameMejoresPuntajes from "../../components/Game/GameMejoresPuntajes.jsx";
import GameOverSummary from "../../components/Game/GameResumenFinal.jsx";
import GameActions from "../../components/Game/GameActions.jsx";
import { useWordChainGame } from "../../hooks/useWordChainGame.js";
import "./GamePage.css";

const GamePage = () => {
    const {
        words,
        score,
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

                <div className="game-board">
                    <div className="game-main-panel">
                        <GameEstadisticas
                            score={score}
                            wordsCount={words.length}
                            remainingTime={remainingTime}
                            nextLetter={nextLetter}
                        />

                        {isGameOver ? (
                            <GameOverSummary
                                score={score}
                                wordsCount={words.length}
                                onRestart={restartGame}
                            />
                        ) : (
                            <WordInput
                                nextLetter={nextLetter}
                                isValidating={isValidating}
                                isGameOver={isGameOver}
                                onSubmitWord={submitWord}
                            />
                        )}

                        <GameMessage message={message} />

                        <WordChain words={words} />

                        {!isGameOver && (
                            <GameActions
                                canRestart={isGameStarted || words.length > 0}
                                onRestart={restartGame}
                            />
                        )}
                    </div>

                    <GameMejoresPuntajes scores={leaderboardScores} />
                </div>
            </main>
        </AppLayout>
    );
};

export default GamePage;
