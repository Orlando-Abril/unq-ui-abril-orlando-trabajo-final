import { TURN_DURATION_SECONDS } from "../../utils/gameConstantes.js";

const RING_RADIUS = 80;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

const GameEstadisticas = ({ score, wordsCount, remainingTime, nextLetter }) => {
    const isTimeRunningLow = remainingTime <= 5;
    const timeRatio = Math.max(0, Math.min(1, remainingTime / TURN_DURATION_SECONDS));
    const dashOffset = RING_CIRCUMFERENCE * (1 - timeRatio);

    return (
        <section className="game-stats" aria-label="Estado de la partida">
            <div className="scoreboard">
                <div className="arcade-score">
                    <span className="arcade-label">Score</span>
                    <strong>{String(score).padStart(3, "0")}</strong>
                </div>

                <div className="arcade-score arcade-score-right">
                    <span className="arcade-label">Words</span>
                    <strong>{String(wordsCount).padStart(2, "0")}</strong>
                </div>
            </div>

            <div
                className="time-ring"
                role="progressbar"
                aria-label="Tiempo restante del turno"
                aria-valuemin={0}
                aria-valuemax={TURN_DURATION_SECONDS}
                aria-valuenow={remainingTime}
            >
                <svg viewBox="0 0 180 180" width="200" height="200" aria-hidden="true">
                    <circle className="time-ring-track" cx="90" cy="90" r={RING_RADIUS} />
                    <circle
                        className={`time-ring-progress ${isTimeRunningLow ? "time-ring-progress-low" : ""}`}
                        cx="90"
                        cy="90"
                        r={RING_RADIUS}
                        strokeDasharray={RING_CIRCUMFERENCE}
                        strokeDashoffset={dashOffset}
                        transform="rotate(-90 90 90)"
                    />
                </svg>

                <div className="time-ring-center">
                    <span className={`ring-time ${isTimeRunningLow ? "ring-time-low" : ""}`}>
                        {remainingTime}s
                    </span>
                    <strong className="ring-letter">
                        {nextLetter ? nextLetter.toUpperCase() : "—"}
                    </strong>
                    <span className="ring-hint">
                        {nextLetter ? "empieza con" : "letra libre"}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default GameEstadisticas;
