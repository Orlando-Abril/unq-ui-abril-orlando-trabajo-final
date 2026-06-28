import { MAX_LEADERBOARD_SCORES } from "../utils/gameConstantes.js";

const LEADERBOARD_STORAGE_KEY = "word-chain-leaderboard";

const isValidScore = (score) => {
    return (
        score &&
        Number.isFinite(score.points) &&
        Number.isFinite(score.words) &&
        typeof score.playedAt === "string"
    );
};

export const getLeaderboardScores = () => {
    try {
        const storedScores = window.localStorage.getItem(LEADERBOARD_STORAGE_KEY);

        if (!storedScores) {
            return [];
        }

        const parsedScores = JSON.parse(storedScores);

        if (!Array.isArray(parsedScores)) {
            return [];
        }

        return parsedScores.filter(isValidScore);
    } catch {
        return [];
    }
};

export const saveLeaderboardScore = (score) => {
    const currentScores = getLeaderboardScores();

    const updatedScores = [...currentScores, score]
        .filter(isValidScore)
        .sort((firstScore, secondScore) => secondScore.points - firstScore.points)
        .slice(0, MAX_LEADERBOARD_SCORES);

    window.localStorage.setItem(
        LEADERBOARD_STORAGE_KEY,
        JSON.stringify(updatedScores)
    );

    return updatedScores;
};