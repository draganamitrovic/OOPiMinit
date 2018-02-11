import React, { Component } from 'react';
import { Dimensions,Alert, View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Student extends React.Component {

  state = {
    dashboard: 'list',
    destinationBooked: [],
    userDetail: [],

    offer: '',

    book: [],

    Pname: '',
    Pdesc: '',
    Pimg: '',
    Pdate: '',
    Porganisator: '',
    Pprice: '',

    Uname: '',
    Uaddress: '',
    Uusername: '',
    Upassword: '',
    Uimg: '',

    users: [],

    studentLoged: {}

  }

  componentWillMount() {
    //save user detail to state
    this.setState({ studentLoged: this.props.studentName, users: global.user, Uname: this.props.studentName.name, Uusername: this.props.studentName.username, Uimg: this.props.studentName.img, Upassword: this.props.studentName.password, Uaddress: this.props.studentName.address });
  }

  //ne cuva se book za usera

   componentWillUnmount() {
  //   global.booked = [];
  //   global.booked = this.state.book;

  global.user = [];
  global.user = this.state.users;
  }

  logout() {
    Actions.reset('login');
  }

  profile = () => {
    //pass user details to profile page from login
    this.setState({ dashboard: 'user' })
  }

  book = () => {
    //alert and strpaj u niz
    // let newUser = { img: this.state.Uimg, name: this.state.Uname, address: this.state.Uaddress, username: this.state.Uusername, password: this.state.Upassword, type: 'organisator' };
    // let list = this.state.users;
    // list.push(newUser);
    // JSON.stringify(list, null, ' ');
    // this.setState({ users: list });

    Alert.alert('Trip booked successfully!')
  }

  back = () => {
    this.setState({ dashboard: 'list' })
  }

  submitUser = () => {
//  //obrisi ga 
//      let deletedUser = this.state.users.filter(function (el) {
//        return (el.username != this.state.studentLoged.username)
//      });
//  //dodaj ga
//      let newUser = { img: this.state.Uimg, name: this.state.Uname, address: this.state.Uaddress, username: this.state.Uusername, password: this.state.Upassword, type: 'organisator' };
//      deletedUser.push(newUser);
//      JSON.stringify(deletedUser, null, ' ');
//      this.setState({ users: deletedUser, studentLoged: newUser });

// this.setState({ Uname: this.state.studentLoged.name, Uusername: this.state.studentLoged.username, Uimg: this.state.studentLoged.img, Upassword: this.state.studentLoged.password, Uaddress: this.state.Uaddress });
//  
this.setState({dashboard: 'list'});
 }

  listItems() {
    return global.trip.map((e, i) => {
      return <View key={e} style={{ flex: 1, flexDirection: 'row', width: '100%', height: 50, borderBottomWidth: 1, borderBottomColor: '#928A97' }}>
        <Text style={styles.destText}>{e.name}</Text>
        <TouchableOpacity style={styles.details} onPress={() => { this.setState({ Pdate: e.date, Pdesc: e.desc, Pimg: e.img, Pname: e.name, Porganisator: e.organisator, Pprice: e.price, dashboard: 'info' }) }}>
          <Image source={require('./ico/more.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.book} onPress={this.book}>
          <Image source={require('./ico/book.png')} />
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
              <Image source={require('./ico/user.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profile} onPress={this.logout}>
              <Image source={require('./ico/log.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitle}>
            <Text style={styles.title}>StudentTuorsitApp</Text>
          </View>
        </View>


        {this.state.dashboard == 'list' &&
          <View style={styles.body}>

            <ScrollView style={{ flex: 1, width: '100%', height: '100%', margin: 10 }}>
              {this.listItems()}
            </ScrollView>

          </View>
        }
        {this.state.dashboard == 'info' &&
          <View style={styles.body}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ width: '100%', alignItems: 'center' }} >
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                <Image
                  style={{ width: 200, height: 200, borderRadius: 5 }}
                  source={{ uri: this.state.Pimg }}
                />
              </View>

              <View style={{ width: Dimensions.get('window').width, justifyContent: 'flex-start', alignItems: 'flex-start' }}>

                <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>  Tourist Offer Name</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={this.state.Pname}
                  placeholderTextColor="gray"
                  returnKeyType="go"
                  ref={(input) => this.Pname = input}
                  onChangeText={Pname => this.setState({ Pname: Pname })}
                />
                <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>  Tourist Offer Date</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={this.state.Pdate}
                  placeholderTextColor="gray"
                  returnKeyType="go"
                  ref={(input) => this.Pdate = input}
                  onChangeText={Pdate => this.setState({ Pdate: Pdate })}
                />
                <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Tourist Offer Price</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={this.state.Pprice}
                  placeholderTextColor="gray"
                  returnKeyType="go"
                  ref={(input) => this.Pprice = input}
                  onChangeText={Pprice => this.setState({ Pprice: Pprice })}
                />
                <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Organisator of Tourist Offer</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={this.state.Porganisator}
                  placeholderTextColor="gray"
                  returnKeyType="go"
                  ref={(input) => this.Porganisator = input}
                  onChangeText={Porganisator => this.setState({ Porganisator: Porganisator })}
                />
                <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Tourist Offer Description</Text>
                <TextInput style={styles.inputDesc}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={this.state.Pdesc}
                  placeholderTextColor="gray"
                  returnKeyType="go"
                  ref={(input) => this.Pdesc = input}
                  onChangeText={Pdesc => this.setState({ Pdesc: Pdesc })}
                  multiline={true}
                />
                <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', width: '100%', textAlign: 'left' }}>Picture of Tourist Offer</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholderTextColor="gray"
                  returnKeyType="go"
                  ref={(input) => this.Pimg = input}
                  onChangeText={Pimg => this.setState({ Pimg: Pimg })}
                />
                <View style={styles.newbtn}>
                  <TouchableOpacity style={styles.createnew} onPress={this.back}>
                    <Image style={{ width: 50, height: 50 }} source={require('./ico/back.png')} />
                  </TouchableOpacity>
                </View>

              </View>
            </ScrollView>
          </View>
        }
        {this.state.dashboard == 'user' &&
          <View style={styles.body}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ width: Dimensions.get('window').width, alignItems: 'flex-start' }} >
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                <Image
                  style={{ width: 200, height: 200, borderRadius: 5 }}
                  source={{ uri: this.state.Uimg }}
                />

              </View>

              <View style={{ width: Dimensions.get('window').width, justifyContent: 'flex-start', alignItems: 'flex-start' }}>

               <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', textAlign: 'left', fontSize: 16 }}>  Full Name</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={this.state.Uname}
                  placeholderTextColor="black"
                  returnKeyType="go"
                  ref={(input) => this.Uname = input}
                  onChangeText={Uname => this.setState({ Uname: Uname })}
                />
                <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', textAlign: 'left', fontSize: 16 }}>  Username</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={this.state.Uusername}
                  placeholderTextColor="black"
                  returnKeyType="go"
                  ref={(input) => this.Uusername = input}
                  onChangeText={Uusername => this.setState({ Uusername: Uusername })}
                />
                <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', textAlign: 'left', fontSize: 16 }}>  Password</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholderTextColor="black"
                  returnKeyType="go"
                  ref={(input) => this.Upassword = input}
                  secureTextEntry={true}
                  onChangeText={Upassword => this.setState({ Upassword: Upassword })}
                />
                <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', textAlign: 'left', fontSize: 16 }}> Address</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={this.state.Uaddress}
                  placeholderTextColor="black"
                  returnKeyType="go"
                  ref={(input) => this.Uaddress = input}
                  onChangeText={Uaddress => this.setState({ Uaddress: Uaddress })}
                />
                <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', textAlign: 'left', fontSize: 16 }}>Picture Url</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={this.state.Uimg}
                  placeholderTextColor="black"
                  returnKeyType="go"
                  ref={(input) => this.Uimg = input}
                  onChangeText={Uimg => this.setState({ Uimg: Uimg })}
                />

                <TouchableOpacity style={styles.submitBtn} onPress={this.submitUser}>
                  <Text style={styles.submitText}> Submit </Text>
                </TouchableOpacity>

              </View>
            </ScrollView>
          </View>
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#e8e8e8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f85959',
  },


  logout: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  logoutbtn: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  profile: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
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
    color: 'white'
  },

  body: {
    flex: 15,
    height: '100%',
    width: '100%',
    padding: 5,
    paddingBottom: 10,
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#e8e8e8'
  },

  listView: {
    flex: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  details: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    width: '100%',
    height: 32
  },

  book: {
    flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
        width: '100%',
        height: 32
  },

  name: {
    flex: 2,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  destText: { flex: 6,
    textAlign: 'left',
    color: 'black',
    alignSelf: 'center',
    paddingTop: 5,
    width: '100%',
    fontSize: 16,
    width: '100%',
    height: 35
  },

  listViewBtn: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  listTitle: {
    fontSize: 18,
    width: '100%',
    textAlign: 'left',
    color: '#f85959',
    fontWeight: 'bold',
    paddingBottom: 10
},

createnew: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e8e8e8',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    margin: 15
},

createnewtext: {
    color: 'white',
    textAlign: 'center',
    paddingBottom: 3,
    paddingLeft: 2,
    fontSize: 14,
    fontWeight: 'bold'
},

newbtn: {
    alignItems: 'flex-end',
    paddingRight: 10,
    width: '100%',
    height: 70,
    backgroundColor: '#e8e8e8',
    justifyContent: 'flex-end'
},

tab: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f85959',
    margin: 2,
},

tabView: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    flex: 1.5,
    backgroundColor: '#e8e8e8'
},

input: {
    width: Dimensions.get('window').width,
    height: 45,
    marginBottom: 5,
    backgroundColor: 'white',
    textAlign: 'left',
    padding: 0,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderColor: 'gray'
},

submitBtn: {
    width: 120,
    height: 40,
    marginTop: 15,
    backgroundColor: '#f85959',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 7,
},

submitText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
},



})