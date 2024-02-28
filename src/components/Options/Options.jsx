import css from "./Options.module.css";

export default function Options({ onUpdateFeedback, onReset, isResetBtn }) {
  return (
    <ul className={css.list}>
      <li>
        <button
          onClick={() => {
            onUpdateFeedback("good");
          }}
        >
          Good
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            onUpdateFeedback("neutral");
          }}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            onUpdateFeedback("bad");
          }}
        >
          Bad
        </button>
      </li>
      {isResetBtn && (
        <li>
          <button
            onClick={() => {
              onReset();
            }}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}
