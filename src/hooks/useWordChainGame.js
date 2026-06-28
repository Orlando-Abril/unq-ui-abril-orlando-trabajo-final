import { useCallback, useEffect, useRef, useState } from "react";
import { getLeaderboardScores, saveLeaderboardScore } from "../services/leaderboardService.js";
import { validateWordExists } from "../services/wordService.js";
import { TURN_DURATION_SECONDS } from "../utils/gameConstantes.js";
import { GAME_MESSAGES } from "../utils/gameMensaje.js";
import {
    calculateTotalScore,
    getNextRequiredLetter,
    normalizeWord,
    respectsChainRule,
    wasWordUsed,
} from "../utils/wordReglas.js";

export const useWordChainGame = () => {
    const [words, setWords] = useState([]);
    const [message, setMessage] = useState(GAME_MESSAGES.initial);
    const [isValidating, setIsValidating] = useState(false);
    const [remainingTime, setRemainingTime] = useState(TURN_DURATION_SECONDS);
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [leaderboardScores, setLeaderboardScores] = useState(getLeaderboardScores);

    const scoreAlreadySaved = useRef(false);
    const gameOverRef = useRef(false);

    const score = calculateTotalScore(words);
    const nextLetter = getNextRequiredLetter(words);
    const lastWord = words.at(-1) || "";

    const finishGame = useCallback(() => {
        gameOverRef.current = true;
        setIsGameOver(true);
        setMessage(GAME_MESSAGES.gameOver);

        if (words.length === 0 || scoreAlreadySaved.current) {
            return;
        }

        scoreAlreadySaved.current = true;

        const newScore = {
            points: score,
            words: words.length,
            playedAt: new Date().toISOString(),
        };

        const updatedLeaderboard = saveLeaderboardScore(newScore);
        setLeaderboardScores(updatedLeaderboard);
    }, [score, words.length]);

    useEffect(() => {
        if (!isGameStarted || isGameOver) {
            return;
        }

        const timerId = window.setInterval(() => {
            setRemainingTime((currentTime) => {
                if (currentTime <= 1) {
                    window.clearInterval(timerId);
                    window.setTimeout(finishGame, 0);
                    return 0;
                }

                return currentTime - 1;
            });
        }, 1000);

        return () => window.clearInterval(timerId);
    }, [finishGame, isGameOver, isGameStarted]);

    const submitWord = async (word) => {
        if (isGameOver || gameOverRef.current) {
            setMessage(GAME_MESSAGES.gameOver);
            return;
        }

        if (isValidating) {
            return;
        }

        const normalizedWord = normalizeWord(word);

        if (!normalizedWord) {
            setMessage(GAME_MESSAGES.emptyWord);
            return;
        }

        if (wasWordUsed(normalizedWord, words)) {
            setMessage(GAME_MESSAGES.wordAlreadyUsed);
            return;
        }

        if (!respectsChainRule(normalizedWord, words)) {
            setMessage(GAME_MESSAGES.invalidChain);
            return;
        }

        try {
            setIsValidating(true);

            const exists = await validateWordExists(normalizedWord);

            if (gameOverRef.current) {
                return;
            }

            if (!exists) {
                setMessage(GAME_MESSAGES.wordNotFound);
                return;
            }

            setWords((currentWords) => [...currentWords, normalizedWord]);
            setRemainingTime(TURN_DURATION_SECONDS);
            setIsGameStarted(true);
            setMessage(GAME_MESSAGES.validWord);
        } catch {
            setMessage(GAME_MESSAGES.requestError);
        } finally {
            setIsValidating(false);
        }
    };

    const restartGame = () => {
        setWords([]);
        setMessage(GAME_MESSAGES.initial);
        setIsValidating(false);
        setRemainingTime(TURN_DURATION_SECONDS);
        setIsGameStarted(false);
        setIsGameOver(false);
        scoreAlreadySaved.current = false;
        gameOverRef.current = false;
    };

    return {
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
    };
};