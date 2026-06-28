const WORD_API_BASE_URL = "https://word-api-hmlg.vercel.app";

export const validateWordExists = async (word) => {
    const queryParams = new URLSearchParams({
        word,
    });

    const response = await fetch(`${WORD_API_BASE_URL}/api/validate?${queryParams}`);

    if (!response.ok) {
        throw new Error("No se pudo validar la palabra.");
    }

    const data = await response.json();

    return data.exists;
};