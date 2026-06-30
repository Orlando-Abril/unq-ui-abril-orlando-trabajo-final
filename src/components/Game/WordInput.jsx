import { useEffect, useRef, useState } from "react";

const WordInput = ({ nextLetter, isValidating, isGameOver, onSubmitWord }) => {
    const [word, setWord] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        if (!isValidating && !isGameOver) {
            inputRef.current?.focus();
        }
    }, [isValidating, isGameOver]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        await onSubmitWord(word);
        setWord("");
    };

    const helperText = nextLetter
        ? `Debe comenzar con la letra ${nextLetter.toUpperCase()}`
        : "La primera palabra puede ser cualquiera";

    return (
        <form className="word-form" onSubmit={handleSubmit}>
            <label htmlFor="word-input">
                Nueva palabra
                <span>{helperText}</span>
            </label>

            <div className="word-form-controls">
                <input
                    ref={inputRef}
                    id="word-input"
                    type="text"
                    value={word}
                    onChange={(event) => setWord(event.target.value)}
                    placeholder={nextLetter ? `Palabra con ${nextLetter.toUpperCase()}` : "Ej: casa"}
                    autoComplete="off"
                    disabled={isValidating || isGameOver}
                />
                <button type="submit" disabled={isValidating || isGameOver}>
                    {isValidating ? "Validando..." : "Enviar"}
                </button>
            </div>
        </form>
    );
};

export default WordInput;
