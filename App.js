import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button} from 'react-native';
import Message from './Message'

export default class App extends React.Component {
  render() {
    const message = {
      title: 'Hola mundo',
      footer: 'Estamos aprendiendo React',
    }
    return (
      <ScrollView style={styles.container}>
        <Message message={message} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    flexWrap: 'wrap'
  }
});
