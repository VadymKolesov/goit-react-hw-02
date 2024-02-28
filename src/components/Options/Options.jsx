import css from "./Options.module.css";

export default function Options({ onUpdateFeedback, onReset, total }) {
  return (
    <ul className={css.list}>
      <li>
        <button
          type="button"
          aria-label="Good opinion button"
          onClick={() => {
            onUpdateFeedback("good");
          }}
        >
          Good
        </button>
      </li>
      <li>
        <button
          type="button"
          aria-label="Neutral opinion button"
          onClick={() => {
            onUpdateFeedback("neutral");
          }}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          type="button"
          aria-label="Bad opinion button"
          onClick={() => {
            onUpdateFeedback("bad");
          }}
        >
          Bad
        </button>
      </li>
      {total > 0 ? (
        <li>
          <button
            type="button"
            aria-label="Reset button"
            onClick={() => {
              onReset();
            }}
          >
            Reset
          </button>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
}
