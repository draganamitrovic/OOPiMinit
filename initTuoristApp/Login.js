import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, StatusBar, ScrollView, Image, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//import { Firebase } from './Firebase';
import { Dialog } from 'react-native-simple-dialogs';

export default class Login extends React.Component {

  state = {
    username: '',
    password: '',
    error: '',
    loading: false,
    dialogVisible: false
  };


  signup() {
    Actions.signup()
    //Actions.ponuda({Pname: 'Paris for 2 days', Pdate: '02.01.2018.-04.01.2018.', Porganisator: 'Organisator', Pprice: '1000', Pdesc: 'On 02.01. at 05:00h we will go to Paris and be back by 04.01. 22:00h. The trips lasts for three days and two nights. Price includes two nights in hotel with breakfast. ', Pimg: 'http://www.iconhot.com/icon/png/file-icons-vs-2/256/jpg-2.png'})
    // Actions.ponuda({ Pname: global.trip[5].name, Pdate: '', Porganisator: '', Pprice: '', Pdesc: '', Pimg: 'http://www.iconhot.com/icon/png/file-icons-vs-2/256/jpg-2.png' })
  };

  login = () => {

    for (let i = 0; i < global.user.length; i++) {

      if (global.user[i].username === this.state.username && global.user[i].password == this.state.password) {
        //tacan password, prebaci na stanicu
        switch (global.user[i].type) {
          case 'admin':
            return Actions.admin()
            break;
          case 'organisator':
            return Actions.organisator()
            break;
          case 'student':
            return Actions.student()
            break;
        }
      }
    }
   Alert.alert('You have entered an invalid username or password')
  };

    // global.user.map((element, i)=>{
    //   if (element.username === this.state.username) {
    //     //tacan username, proveri sifru
    //     if (element.password == this.state.password) {
    //       //tacan password, prebaci na stanicu
    //       switch (element.type) {
    //         case 'admin':
    //           return Actions.admin()
    //           break;
    //         case 'organisator':
    //           Actions.organisator()
    //           break;
    //         case 'student':
    //           Actions.student()
    //           break;
    //       }
    //     } else {
    //       //netacan password
    //       Alert.alert('You submitted wrong password.')
    //       break;
    //     }
    //   } else {
    //     //netacan username
    //     // You are not registred or you submitted wrong username and password
    //     Alert.alert('username '+this.state.username+element.username)
    //     break;
    //   }
    // })




  // Actions.user({Uname: 'hmgc', Uaddress: 'admin address', Uusername: 'admin', Upassword: 'admin', Uimg:'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg'});

  // let username = this.state.username;
  // let password = this.state.password;

  // firebase.auth().signInWithEmailAndPassword(email, password)
  //   .then(() => {
  //     this.setState({ error: '', loading: false });
  //     Actions.student();
  //   })
  //   .catch(() => {
  //     this.setState({ error: 'Authentication failed', loading: false })
  //   })


  render() {
    return (

      <View style={styles.container}>



        <View style={styles.titleView}>
          <Text style={styles.title}>Welcome to StudentTuorsitApp</Text>
        </View>

        <View style={styles.subtitleView}>
          <Text style={styles.subtitle}>Login to continue or&nbsp;
          <Text style={styles.register} onPress={this.signup}>Register</Text></Text>
        </View>

        <ScrollView>
          <View style={styles.formView}>
            <TextInput style={styles.input}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Username"
              placeholderTextColor="#2f4775"
              returnKeyType="go"
              ref={(input) => this.username = input}
              onChangeText={username => this.setState({ username: username })}
            />
            <TextInput style={styles.input}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#2f4775"
              returnKeyType="go"
              ref={(input) => this.password = input}
              onChangeText={password => this.setState({ password: password })}
            />
            <TouchableOpacity style={styles.login} onPress={this.login}>
              <Text style={styles.loginText}> Login </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.footerView}>
          <Text style={styles.footer}>by Dragana Mitrovic</Text>
          {this.state.loading &&
            <Text style={styles.footer}>Loading</Text>
          }
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#283C63',
  },

  titleView: {
    flex: 1.5,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  subtitleView: {
    flex: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  register: {
    fontSize: 17,
    color: '#F85F73',
    fontWeight: 'bold'
  },

  formView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  footerView: {
    flex: 0.25,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    padding: 10
  },

  footer: {
    textAlign: 'right',
    color: '#928A97',
    alignSelf: 'flex-end',
    width: '100%',
    fontSize: 12
  },

  input: {
    width: 230,
    height: 40,
    marginBottom: 15,
    backgroundColor: '#F0FFF3',
    textAlign: 'center'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
    color: '#F85F73',
  },

  subtitle: {
    fontSize: 17,
    color: '#928A97',
  },

  login: {
    width: 85,
    height: 30,
    marginTop: 5,
    backgroundColor: '#F85F73',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },

  loginText: {
    color: '#283C63',
    textAlign: 'center',
    fontWeight: 'bold'
  }

})