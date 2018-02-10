import React, { Component } from 'react';
import { Alert, View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Student extends React.Component {

  state = {
    destinationBooked: [],
    userDetail: [],
    studentName: '',
    window: 'list',

    offer: '',

    Pname: '',
    Pdesc: '',
    Pimg: '',
    Pdate: '',
    Porganisator: '',
    Pprice: ''
  }

  componentWillMount() {
    //save user detail to state
    this.setState({ studentName: this.props.studentName });
  }

  logout() {
    Actions.login();
  }

  profile = () => {
    //pass user details to profile page from login
    Actions.user({ user: 'user', usernameLogin: this.props.studentName });
  }

  details(name) {
    this.setState({offer: name})
    global.trip.map((e) => {
      Alert.alert('name offer ' + e.name + ' props offer .' + this.state.offer);
      if (e.name === this.state.offer) {
        // Alert.alert('name offer ' + e.name + ' props offer .' + this.state.offer);
        this.setState({ Pname: e.name, Pdate: e.date, Pprice: e.price, Porganisator: e.organisator, Pdesc: e.desc, Pimg: e.img });
      }
    });
    this.setState({ window: 'offer' })
  }

  book = () => {
    //alert and strpaj u niz
  }

  listItems() {
    return global.trip.map((e, i) => {
      return <View key={e} style={{ flex: 1, flexDirection: 'row', width: '100%', height: 50, borderBottomWidth: 1, borderBottomColor: '#928A97' }}>
        <Text style={styles.destText}>{e.name}</Text>
        <TouchableOpacity style={styles.details} onPress={() => {this.details(e.name)}}>
          <Text style={styles.detailsText}> Details </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.book} onPress={this.book}>
          <Text style={styles.bookText}> Book Now </Text>
        </TouchableOpacity>
      </View>
    })
  }



  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.logout}>
            <TouchableOpacity style={styles.profile} onPress={this.profile}>
              <Text style={styles.logoutText}> Profile </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutbtn} onPress={this.logout}>
              <Text style={styles.logoutText}> Log out </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitle}>
            <Text style={styles.title}>StudentTuorsitApp</Text>
          </View>
        </View>

        <View style={styles.body}>

          {this.state.window == 'list' &&
            <ScrollView style={{ flex: 1, width: '100%', height: '100%', margin: 10 }}>

              {this.listItems()}

            </ScrollView>
          }

          {this.state.window == 'offer' &&
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ width: '100%', alignItems: 'center' }} >
              <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10 }}>
                <Image
                  style={{ width: 150, height: 150, borderRadius: 5, margin: 10 }}
                  source={{ uri: this.props.Pimg }}
                />

              </View>

              <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>

                <Text style={{ padding: 10, color: '#F0FFF3', fontWeight: 'bold', width: '100%', textAlign: 'center' }}>Picture of Journey</Text>
                <TextInput style={styles.inputUri}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={this.props.Pimg}
                  placeholderTextColor="#2f4775"
                  returnKeyType="go"
                  ref={(input) => this.Pimg = input}
                  onChangeText={Pimg => this.setState({ Pimg: Pimg })}
                />
                <Text style={{ padding: 10, color: '#F0FFF3', fontWeight: 'bold', textAlign: 'center' }}>Journey Name</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={this.props.Pname}
                  placeholderTextColor="#2f4775"
                  returnKeyType="go"
                  ref={(input) => this.Pname = input}
                  onChangeText={Pname => this.setState({ Pname: Pname })}
                />
                <Text style={{ padding: 10, color: '#F0FFF3', fontWeight: 'bold', textAlign: 'center' }}>Journey Date</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={this.props.Pdate}
                  placeholderTextColor="#2f4775"
                  returnKeyType="go"
                  ref={(input) => this.Pdate = input}
                  onChangeText={Pdate => this.setState({ Pdate: Pdate })}
                />
                <Text style={{ padding: 10, color: '#F0FFF3', fontWeight: 'bold', textAlign: 'center' }}>Journey Price</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={this.props.Pprice}
                  placeholderTextColor="#2f4775"
                  returnKeyType="go"
                  ref={(input) => this.Pprice = input}
                  onChangeText={Pprice => this.setState({ Pprice: Pprice })}
                />
                <Text style={{ padding: 10, color: '#F0FFF3', fontWeight: 'bold', textAlign: 'center' }}>Organisator of Journey</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={this.props.Porganisator}
                  placeholderTextColor="#2f4775"
                  returnKeyType="go"
                  ref={(input) => this.Porganisator = input}
                  onChangeText={Porganisator => this.setState({ Porganisator: Porganisator })}
                />
                <Text style={{ padding: 10, color: '#F0FFF3', fontWeight: 'bold', textAlign: 'center' }}>Journey Description</Text>
                <TextInput style={styles.inputDesc}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={this.props.Pdesc}
                  placeholderTextColor="#2f4775"
                  returnKeyType="go"
                  ref={(input) => this.Pdesc = input}
                  onChangeText={Pdesc => this.setState({ Pdesc: Pdesc })}
                  multiline={true}
                />
                <TouchableOpacity style={styles.submitBtn} onPress={this.login}>
                  <Text style={styles.submitText}> Submit Changes </Text>
                </TouchableOpacity>

              </View>
            </ScrollView>
          }
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>by Dragana Mitrovic</Text>
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
    backgroundColor: '#f4ac8c',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2d3a5a',
    borderBottomWidth: 2,
    borderColor: '#ee7946'
  },


  logout: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#2d3a5a',
  },

  logoutbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 30,
    borderBottomLeftRadius: 15,
    backgroundColor: '#3f507c',
    borderWidth: 2,
    borderColor: '#2d3a5a'
  },

  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 30,
    borderBottomRightRadius: 15,
    backgroundColor: '#3f507c',
    borderWidth: 2,
    borderColor: '#2d3a5a'
  },

  logoutText: {
    color: '#f08a5d',
    textAlign: 'center',
    paddingBottom: 3,
    paddingLeft: 2,
    fontSize: 16,
    fontWeight: 'bold'
  },

  headerTitle: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
    color: '#ee7946'
  },

  body: {
    flex: 14,
    height: '100%',
    width: '100%',
    padding: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  listView: {
    flex: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  details: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 25,
    backgroundColor: '#3f507c',
    margin: 10,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  detailsText: {
    color: '#ee7946',
    textAlign: 'center',
    paddingBottom: 3,
    paddingLeft: 2,
    fontSize: 12,
    fontWeight: 'bold'
  },

  book: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 25,
    backgroundColor: '#36456b',
    borderWidth: 2,
    borderColor: '#3f507c',
    margin: 10,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  bookText: {
    color: '#ee7946',
    textAlign: 'center',
    paddingBottom: 3,
    paddingLeft: 2,
    fontSize: 12,
    fontWeight: 'bold'
  },

  name: {
    flex: 2,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  detailsbook: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  destText: {
    textAlign: 'left',
    color: '#252f49',
    alignSelf: 'center',
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    width: 195
  },

  listViewBtn: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  footer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    padding: 10,
    backgroundColor: '#f29b74'
  },

  footerText: {
    textAlign: 'right',
    color: '#3f507c',
    alignSelf: 'flex-end',
    width: '100%',
    fontSize: 12
  },

})