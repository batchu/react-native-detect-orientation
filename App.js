import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends React.Component {
  componentWillMount() {
    this.getOrientation();
  }
  handleLayoutChange() {
    this.getOrientation();
  }

  getOrientation() {
    const { width, height } = Dimensions.get('window');
    const orientation = height > width ? 'Portrait' : 'Landscape';
    this.setState({
      orientation
    });
  }

  render() {
    return (
      <View
        onLayout={() => this.handleLayoutChange}
        style={styles.container}
      >
        <Text style={styles.text}>
          {this.state.orientation}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 40,
  }
});