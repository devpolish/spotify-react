import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Message extends React.Component {
  render() {
    const { title, footer } = this.props.message
    return (
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.footer}>{footer}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.footer}>{footer}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.footer}>{footer}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.footer}>{footer}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.footer}>{footer}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.footer}>{footer}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.footer}>{footer}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: 'lightblue'
  },

  footer: {
    fontSize: 20,
    color: 'blue'
  }
});
