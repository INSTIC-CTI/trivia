import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function QuizScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={styles.button}
      onPress={()=>{}}
      >
        <Text style={styles.buttonText}>Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#301b75',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor: '#db6f16',
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:10
  },
  buttonText:{
    color: '#fff',
    fontSize:18
  }
});
