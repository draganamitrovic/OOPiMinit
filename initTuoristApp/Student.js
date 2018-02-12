import React, { Component } from 'react';
import { Dimensions, Alert, View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Student extends React.Component {

  state = {
    selectedTab: 'list',
    dashboard: 'list',
    destinationBooked: [],
    userDetail: [],

    offer: '',

    book: [],

    Pname: '',
    Pdesc: '',
    Pimg: '',
    Pdate: '',
    Pmanager: '',
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
    this.setState({ destinationBooked: global.booked, studentLoged: this.props.studentName, users: global.user, Uname: this.props.studentName.name, Uusername: this.props.studentName.username, Uimg: this.props.studentName.img, Upassword: this.props.studentName.password, Uaddress: this.props.studentName.address });
  }

  componentWillUnmount() {
    global.booked = [];
    global.booked = this.state.destinationBooked;

    global.user = [];
    global.user = this.state.users;
  }

  logout() {
    Actions.reset('login');
  }

  profile = () => {
    this.setState({ dashboard: 'user' })
  }

  back = () => {
    this.setState({ dashboard: 'list' })
  }

  submitUser = () => {
    this.setState({ dashboard: 'list' });
  }

  listItems() {
    return global.trip.map((e, i) => {
      return <View key={e} style={{ flex: 1, flexDirection: 'row', width: '100%', height: 50, borderBottomWidth: 1, borderBottomColor: '#928A97' }}>
        <Text style={styles.destText}>{e.name}</Text>
        <TouchableOpacity style={styles.details} onPress={() => { this.setState({ Pdate: e.date, Pdesc: e.desc, Pimg: e.img, Pname: e.name, Pmanager: e.manager, Pprice: e.price, dashboard: 'info' }) }}>
          <Image style={{ width: 32, height: 32 }} source={require('./ico/more.png')} />
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.book} onPress={this.book}> */}
        <TouchableOpacity style={styles.book} onPress={() => { this.bookOffer(e.name) }}>
          <Image style={{ width: 32, height: 32 }} source={require('./ico/book.png')} />
        </TouchableOpacity>
      </View>
    })
  }

  bookOffer = (name) => {
    let booked = this.state.destinationBooked;
    let imaga = false;
    booked.map((e) => {
      if (name == e) {
        imaga = true;
      }
    });
    if (!imaga) {
      booked.push(name);
      this.setState({ destinationBooked: booked });
      Alert.alert('Trip booked successfully!')
    } else {
      Alert.alert('You have allready booked this offer!')
    }
  }

  listBooked() {
    return this.state.destinationBooked.map((e, i) => {
      return <View key={i} style={{ flex: 1, flexDirection: 'row', width: '100%', height: 37, borderBottomWidth: 1, borderBottomColor: '#928A97', justifyContent: 'center' }}>
        <Text style={styles.destText}>{e}</Text>
      </View>
    })
  }



  render() {

    return (

      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.logout}>
            <TouchableOpacity style={styles.profile} onPress={this.profile}>
              <Image style={{ width: 32, height: 32 }} source={require('./ico/user.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profile} onPress={this.logout}>
              <Image style={{ width: 32, height: 32 }} source={require('./ico/log.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitle}>
            <Text style={styles.title}>StudentTuorsitApp</Text>
          </View>
        </View>


        {this.state.dashboard == 'list' &&

          <View style={{ flex: 15, justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>

            <View style={styles.body}>

              {this.state.selectedTab == 'list' &&
                <View style={{ flex: 1, width: '100%', height: '100%', margin: 7 }}>
                  <Text style={styles.listTitle}>List of All Tourist Offers:</Text>
                  <ScrollView>
                    {this.listItems()}
                  </ScrollView>
                </View>
              }

              {this.state.selectedTab == 'booked' &&
                <View style={{ flex: 1, width: '100%', height: '100%', margin: 7 }}>
                  <Text style={styles.listTitle}>List of Booked Tourist Offers:</Text>
                  <ScrollView>

                    {this.listBooked()}

                  </ScrollView>
                </View>
              }

            </View>

            <View style={styles.tabView}>

              <TouchableOpacity style={styles.tab} onPress={() => this.setState({ selectedTab: 'list' })}>
                <Image style={{ width: 32, height: 32 }} source={this.state.selectedTab == 'list' ? require('./ico/tour.png') : require('./ico/tourOff.png')} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.tab} onPress={() => this.setState({ selectedTab: 'booked' })}>
                <Image style={{ width: 32, height: 32 }} source={this.state.selectedTab == 'booked' ? require('./ico/book.png') : require('./ico/bookedOff.png')} />
              </TouchableOpacity>

            </View>
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

                <Text style={{ padding: 10, color: '#1c2338', fontWeight: 'bold', textAlign: 'center' }}>Tourist Offer Name</Text>
                <View style={styles.inputView}>
                  <Text style={{ fontSize: 16, color: '#1c2338' }}>{this.state.Pname}</Text>
                </View>

                <Text style={{ padding: 10, color: '#1c2338', fontWeight: 'bold', textAlign: 'center' }}>Tourist Offer Date</Text>
                <View style={styles.inputView}>
                  <Text style={{ fontSize: 16, color: '#1c2338' }}>{this.state.Pdate}</Text>
                </View>

                <Text style={{ padding: 10, color: '#1c2338', fontWeight: 'bold', textAlign: 'center' }}>Tourist Offer Price</Text>
                <View style={styles.inputView}>
                  <Text style={{ fontSize: 16, color: '#1c2338' }}>{this.state.Pprice}</Text>
                </View>

                <Text style={{ padding: 10, color: '#1c2338', fontWeight: 'bold', textAlign: 'center' }}>Manager of Tourist Offer</Text>
                <View style={styles.inputView}>
                  <Text style={{ fontSize: 16, color: '#1c2338' }}>{this.state.Pmanager}</Text>
                </View>

                <Text style={{ padding: 10, color: '#1c2338', fontWeight: 'bold', textAlign: 'center' }}>Tourist Offer Description</Text>
                <View style={styles.inputViewDesc}>
                  <Text style={{ fontSize: 16, color: '#1c2338' }}>{this.state.Pdesc}</Text>
                </View>



              </View>
            </ScrollView>

            <TouchableOpacity style={{ bottom: 10, right: 10, zIndex: 3, position: 'absolute' }} onPress={this.back}>
              <Image style={{ width: 50, height: 50 }} source={require('./ico/back.png')} />
            </TouchableOpacity>

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

                <Text style={{ padding: 10, color: '#1c2338', fontWeight: 'bold', textAlign: 'left', fontSize: 16 }}>  Full Name</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={this.state.Uname}
                  placeholderTextColor="#1c2338"
                  returnKeyType="go"
                  ref={(input) => this.Uname = input}
                  onChangeText={Uname => this.setState({ Uname: Uname })}
                />
                <Text style={{ padding: 10, color: '#1c2338', fontWeight: 'bold', textAlign: 'left', fontSize: 16 }}>  Username</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={this.state.Uusername}
                  placeholderTextColor="#1c2338"
                  returnKeyType="go"
                  ref={(input) => this.Uusername = input}
                  onChangeText={Uusername => this.setState({ Uusername: Uusername })}
                />
                <Text style={{ padding: 10, color: '#1c2338', fontWeight: 'bold', textAlign: 'left', fontSize: 16 }}>  Password</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholderTextColor="#1c2338"
                  returnKeyType="go"
                  ref={(input) => this.Upassword = input}
                  secureTextEntry={true}
                  onChangeText={Upassword => this.setState({ Upassword: Upassword })}
                />
                <Text style={{ padding: 10, color: '#1c2338', fontWeight: 'bold', textAlign: 'left', fontSize: 16 }}> Address</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={this.state.Uaddress}
                  placeholderTextColor="#1c2338"
                  returnKeyType="go"
                  ref={(input) => this.Uaddress = input}
                  onChangeText={Uaddress => this.setState({ Uaddress: Uaddress })}
                />
                <Text style={{ padding: 10, color: '#1c2338', fontWeight: 'bold', textAlign: 'left', fontSize: 16 }}>Picture Url</Text>
                <TextInput style={styles.input}
                  underlineColorAndroid='rgba(0,0,0,0)'
                  placeholder={this.state.Uimg}
                  placeholderTextColor="#1c2338"
                  returnKeyType="go"
                  ref={(input) => this.Uimg = input}
                  onChangeText={Uimg => this.setState({ Uimg: Uimg })}
                />

                <TouchableOpacity style={styles.submitBtn} onPress={this.submitUser}>
                  <Text style={styles.submitText}> Submit </Text>
                </TouchableOpacity>

              </View>
            </ScrollView>


            <TouchableOpacity style={{ bottom: 10, right: 10, zIndex: 3, position: 'absolute' }} onPress={this.back}>
              <Image style={{ width: 50, height: 50 }} source={require('./ico/back.png')} />
            </TouchableOpacity>

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
    backgroundColor: '#fdf3ee',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f08a5d',
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
    color: '#35446b'
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
    backgroundColor: '#fdf3ee'
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

  destText: {
    flex: 6,
    textAlign: 'left',
    color: '#1c2338',
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
    color: '#35446b',
    fontWeight: 'bold',
    paddingBottom: 10
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

  inputView: {
    width: Dimensions.get('window').width,
    height: 45,
    marginBottom: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 0,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderColor: 'gray'
  },

  inputViewDesc: {
    width: Dimensions.get('window').width,
    height: 150,
    marginBottom: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 0,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderColor: 'gray'
  },

  inputDesc: {
    width: Dimensions.get('window').width,
    height: 150,
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
    backgroundColor: '#f08a5d',
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

  tab: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f08a5d',
    margin: 2,
  },
  tabView: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    flex: 1.5,
    backgroundColor: '#fdf3ee'
  },

})