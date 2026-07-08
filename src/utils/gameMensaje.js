export const MESSAGE_TYPES = {
    info: "info",
    success: "success",
    error: "error",
    danger: "danger",
};

export const GAME_MESSAGES = {
    initial: {
        text: "Ingresá una palabra válida para comenzar la partida.",
        type: MESSAGE_TYPES.info,
    },
    validWord: {
        text: "Palabra válida. El contador vuelve a 15 segundos.",
        type: MESSAGE_TYPES.success,
    },
    emptyWord: {
        text: "Ingresá una palabra para continuar.",
        type: MESSAGE_TYPES.error,
    },
    wordNotFound: {
        text: "La palabra no existe.",
        type: MESSAGE_TYPES.error,
    },
    wordAlreadyUsed: {
        text: "La palabra ya fue utilizada.",
        type: MESSAGE_TYPES.error,
    },
    invalidChain: {
        text: "La palabra no respeta la regla de encadenamiento.",
        type: MESSAGE_TYPES.error,
    },
    requestError: {
        text: "No se pudo validar la palabra. Intentá nuevamente.",
        type: MESSAGE_TYPES.error,
    },
    gameOver: {
        text: "La partida finalizó.",
        type: MESSAGE_TYPES.danger,
    },
};