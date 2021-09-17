import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const quizApi = "https://opentdb.com/api.php?amount=10";

export default class QuizScreen extends Component {
  state = {
    currentQuestion: 0,
    isLoaded: false,
    questions: [],
  };

  componentDidMount() {
    this.fetchQuestions();
  }
  async fetchQuestions() {
    return fetch(quizApi)
      .then((data) => {
        data.json().then((dataJson) => {
          this.setState({
            isLoaded: true,
            questions: dataJson.results
          })
        })
      })
      .catch((err) => console.error(err));
  }
  render() {
    if(this.state.isLoaded) {
      return (
        <ScrollView style={styles.container}>
          <View style={styles.questionContainer}>
            <Text style={styles.question}>
              Q. {this.state.questions[this.state.currentQuestion].question}
            </Text>
          </View>
          <View style={styles.answerContainer}>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Text style={styles.answerText}>Response</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.answerContainer}>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Text style={styles.answerText}>Response</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.answerContainer}>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Text style={styles.answerText}>Response</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.answerContainer}>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Text style={styles.answerText}>Response</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )
    } else {
      return (
      <View>
        <Text>DOOMED !!!</Text>
      </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#301b75",
  },
  button: {
    backgroundColor: "#602bc2",
    padding: 20,
    marginVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  questionContainer: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
  question: {
    fontSize: 50,
    color: "#fff",
    textAlign: "center",
  },
  answerText: {
    fontSize: 18,
    color: "#fff",
  },
  answerContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
