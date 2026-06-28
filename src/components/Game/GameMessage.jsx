const GameMessage = ({ message }) => {
    return (
        <p className={`game-message game-message-${message.type}`}>
            {message.text}
        </p>
    );
};

export default GameMessage;