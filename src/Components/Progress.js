import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, numQuestions, points, maxPoints, answer } = useQuiz();
  return (
    <header className="progress">
      {/* if there is no answer, condition will be false, and number will covert
      false into 0, and if there is answer condition will be true and number
      will convert true into 1, and 1 will be added in index. */}
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question:
        <strong> {index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;
