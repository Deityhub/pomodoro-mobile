import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import { EnhancedText } from "./commons";
import { incSession, incBreak, decSession, decBreak } from "../actions";

class Control extends Component {
  inc = () => {
    if (!this.props.sessionRunning && !this.props.breakRunning) {
      if (this.props.control == "session") {
        this.props.incSession();
      } else {
        this.props.incBreak();
      }
    }
  };

  dec = () => {
    if (!this.props.sessionRunning && !this.props.breakRunning) {
      if (this.props.control == "session") {
        this.props.decSession();
      } else {
        this.props.decBreak();
      }
    }
  };

  render() {
    let { title, sessionLength, breakLength, control } = this.props;

    return (
      <View style={styles.container}>
        <EnhancedText color="#fff" size="25">
          {title}
        </EnhancedText>

        <View style={styles.controlWrapper}>
          <TouchableOpacity style={styles.controlBtn} onPress={this.inc}>
            <EnhancedText color="#fff" size="25">
              +
            </EnhancedText>
          </TouchableOpacity>
          <EnhancedText color="#fff" size="20">
            {control == "session" ? sessionLength : breakLength} min
          </EnhancedText>
          <TouchableOpacity style={styles.controlBtn} onPress={this.dec}>
            <EnhancedText color="#fff" size="25">
              -
            </EnhancedText>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  incSession: () => dispatch(incSession()),
  incBreak: () => dispatch(incBreak()),
  decSession: () => dispatch(decSession()),
  decBreak: () => dispatch(decBreak())
});

const mapStateToProps = state => ({
  sessionRunning: state.session.runTimer,
  breakRunning: state.break.runTimer,
  sessionLength: state.session.sessionLength,
  breakLength: state.break.breakLength
});

const styles = StyleSheet.create({
  container: {
    borderColor: "green",
    borderWidth: 2,
    width: "45%",
    height: "70%",
    backgroundColor: "#91b8d4",
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "#60ffaa",
    borderRadius: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#000",
    shadowOpacity: 0.5,
    justifyContent: "space-evenly"
  },
  controlWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  controlBtn: {
    backgroundColor: "#ff8080",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#80ffaa",
    width: 40,
    height: 40,
    justifyContent: "center",
    borderRadius: 5
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Control);
