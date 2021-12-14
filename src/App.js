import { Component } from 'react';
import { FeedbackOptions } from './components/Feedback/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Section } from './components/Section/Section';
import { Notification } from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const totalFeedback = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0,
    );
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage =
      Math.round((this.state.good * 100) / this.countTotalFeedback()) || 0;
    return positiveFeedbackPercentage;
  };

  onLeaveFeedback = label => {
    this.setState(prevState => {
      return { [label]: prevState[label] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export { App };
