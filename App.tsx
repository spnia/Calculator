/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, useColorScheme, View } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const state = {
    text: '',
    inputText: ''
  };

  const submit = () => {
  // @ts-ignore
    setState({text: state.inputText});
  };

  const [inputText, setInputText] = useState('');
  const [inText, setInText] = useState('');

  const handleButtonPress = () => {
    setInText((prevText) => prevText + '\n' + inputText);
    // 입력한 텍스트를 비움
    setInputText('');
  };

  return (
    <SafeAreaView style={styles.backgroundcol}>
      <Text style={styles.title}>To Do List!</Text>
      <View style={styles.sectionDescription}>
        <View style={styles.partition}>
          <Text style={styles.whitetext}>할 일 입력...</Text>
          <TextInput
            placeholder='입력...'
            maxLength={30}
            style={{color: 'white'}}
            onChangeText={(text) => setInputText(text)}
            value={inputText}
          ></TextInput>
        </View>
        <Button title='할 일 추가' onPress={handleButtonPress}></Button>
        <View style={styles.partition}>
          <Text style={styles.whitetext}>할 일 목록</Text>
          <Text style={styles.whitetext}>{inText}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  partition: {
    backgroundColor: '#080808',
    borderRadius: 13,
    margin: 15,
    padding: 10,
  },
  whitetext: {
    color: 'white',
  },
  title: {
    margin: 15,
    fontSize: 35,
    color: '#080808',
  },
  backgroundcol: {
    backgroundColor: '#e3e3e3',
  },
});

export default App;
