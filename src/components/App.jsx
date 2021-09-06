import React, { Component } from 'react';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: this.state[option] + 1 }));
  };

  totalFeedbacks = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;

    return Math.round(((total - (neutral + bad)) / total) * 100);
  };

  render() {
    const options = this.state;
    let total = this.totalFeedbacks();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Expresso café">
          <FeedbackOptions
            title="Please leave feedback"
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />

          {total ? (
            <Statistics
              title="Statistics"
              good={options.good}
              neutral={options.neutral}
              bad={options.bad}
              total={total}
              positivePercentage={total === 0 ? 0 : positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
