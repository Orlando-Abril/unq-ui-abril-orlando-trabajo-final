const WordChain = ({ words }) => {
    return (
        <section className="word-chain-card">
            <div className="section-title">
                <h2>Cadena actual</h2>
                <span>{words.length} palabras</span>
            </div>

            {words.length === 0 ? (
                <p className="empty-chain">Todavía no ingresaste palabras válidas.</p>
            ) : (
                <ol className="word-chain">
                    {words.map((word) => (
                        <li key={word} className="word-chip">
                            {word}
                        </li>
                    ))}
                </ol>
            )}
        </section>
    );
};

export default WordChain;