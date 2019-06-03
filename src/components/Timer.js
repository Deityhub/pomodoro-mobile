import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import {
  startSession,
  pauseSession,
  renewSession,
  startBreak,
  pauseBreak,
  renewBreak
} from "../actions";
import SessionTime from "./sessionTime";
import BreakTime from "./breakTime";

class Timer extends Component {
  //timerState 1 = session, 0 = break
  state = {
    timerState: 1
  };

  startTimer = () => {
    this.intervalId = setInterval(() => {
      if (this.props.currentSessionLength <= 0) {
        //Todo
        //play alarm sound for notification
        return this.renewTimer();
      }

      this.props.startSession();
    }, 1000);
  };

  startBreak = () => {
    this.intervalId = setInterval(() => {
      if (this.props.currentBreakLength <= 0) {
        //Todo
        //play alarm sound for notification
        return this.renewBreak();
      }

      this.props.startBreak();
    }, 1000);
  };

  pauseTimer = () => {
    this.props.pauseSession();
    clearInterval(this.intervalId);
  };

  pauseBreak = () => {
    this.props.pauseBreak();
    clearInterval(this.intervalId);
  };

  renewTimer = () => {
    this.props.renewSession();
    clearInterval(this.intervalId);
    this.setState({ timerState: 0 });
    this.startBreak();
  };

  renewBreak = () => {
    this.props.renewBreak();
    clearInterval(this.intervalId);
    this.setState({ timerState: 1 });
    this.startTimer();
  };

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.timerState === 1 ? (
          <SessionTime
            sessionTimeLeft={this.props.sessionTimeLeft}
            runSession={this.props.runSession}
            pauseTimer={this.pauseTimer}
            startTimer={this.startTimer}
          />
        ) : (
          <BreakTime
            breakTimeLeft={this.props.breakTimeLeft}
            runBreak={this.props.runBreak}
            pauseBreak={this.pauseBreak}
            startBreak={this.startBreak}
          />
        )}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startSession: () => dispatch(startSession()),
  pauseSession: () => dispatch(pauseSession()),
  renewSession: () => dispatch(renewSession()),
  startBreak: () => dispatch(startBreak()),
  pauseBreak: () => dispatch(pauseBreak()),
  renewBreak: () => dispatch(renewBreak())
});

const mapStateToProps = state => ({
  sessionTimeLeft: state.session.sessionTimeLeft,
  runSession: state.session.runTimer,
  currentSessionLength: state.session.currentSessionLength,
  breakTimeLeft: state.break.breakTimeLeft,
  runBreak: state.break.runTimer,
  currentBreakLength: state.break.currentBreakLength
});

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
