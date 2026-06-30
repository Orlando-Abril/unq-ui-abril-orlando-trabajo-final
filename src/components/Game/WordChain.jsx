const WordChain = ({ words }) => {
    const wordsLabel = words.length === 1 ? "palabra" : "palabras";

    return (
        <section className="word-chain-card">
            <div className="section-title">
                <h2>Cadena</h2>
                <span>{words.length} {wordsLabel}</span>
            </div>

            {words.length === 0 ? (
                <p className="empty-chain">Todavía no encadenaste palabras.</p>
            ) : (
                <ol className="word-chain">
                    {words.map((word, wordIndex) => {
                        const isLastWord = wordIndex === words.length - 1;

                        return (
                            <li
                                key={word}
                                className={`word-chip ${isLastWord ? "word-chip-last" : ""}`}
                            >
                                <span className="word-chip-index">
                                    {String(wordIndex + 1).padStart(2, "0")}
                                </span>
                                {word}
                            </li>
                        );
                    })}
                </ol>
            )}
        </section>
    );
};

export default WordChain;
