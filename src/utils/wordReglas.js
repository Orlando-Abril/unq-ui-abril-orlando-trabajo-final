export const normalizeWord = (word) => {
    return word.trim().toLowerCase();
};

export const calculateWordScore = (word) => {
    return normalizeWord(word).length;
};

export const calculateTotalScore = (words) => {
    return words.reduce((totalScore, word) => totalScore + calculateWordScore(word), 0);
};

export const getLastLetter = (word) => {
    const normalizedWord = normalizeWord(word);

    return normalizedWord.at(-1) || "";
};

export const getNextRequiredLetter = (words) => {
    if (words.length === 0) {
        return "";
    }

    return getLastLetter(words[words.length - 1]);
};

export const wasWordUsed = (word, usedWords) => {
    const normalizedWord = normalizeWord(word);

    return usedWords.some((usedWord) => normalizeWord(usedWord) === normalizedWord);
};

export const respectsChainRule = (word, words) => {
    if (words.length === 0) {
        return true;
    }

    const normalizedWord = normalizeWord(word);
    const requiredLetter = getNextRequiredLetter(words);

    return normalizedWord.startsWith(requiredLetter);
};