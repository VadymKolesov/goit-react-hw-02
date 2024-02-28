import { useState } from "react";
import { useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

let savedFeedback = JSON.parse(localStorage.getItem("feedback"));

const getFeedback = () => {
  if (!savedFeedback) {
    savedFeedback = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  return savedFeedback;
};

function App() {
  const [feedback, setFeedback] = useState(getFeedback);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback =
    Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100) +
    "%";

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    let resetedFeedback = {};

    for (let key in feedback) {
      resetedFeedback[key] = 0;
    }

    setFeedback(resetedFeedback);
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        onUpdateFeedback={updateFeedback}
        onReset={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
