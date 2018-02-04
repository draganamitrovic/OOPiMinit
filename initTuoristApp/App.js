import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router } from 'react-native-router-flux';
import Routes from './Router';
import Firebase from './Firebase';
import Realm from 'realm';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { realm: null };
  }

  // componentWillMount(){
  //   Realm.open({
  //     schema: [{name: 'Dog', properties: {name: 'string'}}]
  //   }).then(realm => {
  //     realm.write(() => {
  //       realm.create('Dog', {name: 'Rex'});
  //     });
  //     this.setState({ realm });
  //   });
  // }
  
  render() {
    // const info = this.state.realm
    // ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
    // : 'Loading...';

  return (
    // <View style={styles.container}>
    //   <Text style={styles.welcome}>
    //     {info}
    //   </Text>
    // </View>

    <Routes />
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#283C63',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
