import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Student extends React.Component {

  state = {
    destinationBooked: [],
    userDetail: [],
  }

  componentWillMount() {
    //save user detail to state
  }

  logout() {
    Actions.login();
  }

  profile = () => {
    //pass user details to profile page from login
  }

  details = () => {
    //pass offer parameters to trip page
  }

  listItems() {
    return global.trip.map((e, i) => {
      return <View key={i} style={{ flex: 1, flexDirection: 'row', width: '100%', height: 50, borderBottomWidth: 1, borderBottomColor: '#928A97' }}>
        <Text style={styles.destText}>{e.name}</Text>
        <TouchableOpacity style={styles.details} onPress={this.details}>
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
          <ScrollView style={{ flex: 1, width: '100%', height: '100%', margin: 10 }}>

            {this.listItems()}

          </ScrollView>
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
    backgroundColor: '#283C63',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2f4775',
    borderBottomWidth: 2,
    borderColor: '#19233e'
  },


  logout: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#2f4775',
  },

  logoutbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 30,
    borderBottomLeftRadius: 15,
    backgroundColor: '#F85F73',
    borderWidth: 2,
    borderColor: '#f86f81'
  },

  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 30,
    borderBottomRightRadius: 15,
    backgroundColor: '#F85F73',
    borderWidth: 2,
    borderColor: '#f86f81'
  },

  logoutText: {
    color: '#19233e',
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
    color: '#F85F73'
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
    backgroundColor: '#F85F73',
    margin: 10,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  detailsText: {
    color: '#19233e',
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
    backgroundColor: '#f86f81',
    borderWidth: 2,
    borderColor: '#F85F73',
    margin: 10,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  bookText: {
    color: '#19233e',
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
    color: '#FBE8D3',
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
    backgroundColor: '#213151'
  },

  footerText: {
    textAlign: 'right',
    color: '#928A97',
    alignSelf: 'flex-end',
    width: '100%',
    fontSize: 12
  },

})