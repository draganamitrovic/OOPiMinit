import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TabNavigator from 'react-native-tab-navigator';

export default class Admin extends React.Component {

    state = {
        selectedTab: 'managers',
        offers: [],
        users: [],
    }

    componentWillMount() {
        //    let  users = global.user.push(this.props.newUser)
        //     this.setState({ offers: global.trip, users: users });
        this.setState({ offers: global.trip, users: global.user });
    }

    logout() {
        Actions.login();
    }

    deleteOffer = (name) => {
        let deletedOffer = this.state.offers.filter(function (el) {
            return el.name != name
        });
        this.setState({ offers: deletedOffer })
    }

    deletedUser = (name) => {
        let deletedUser = this.state.users.filter(function (el) {
            return el.name != name
        });
        this.setState({ users: deletedUser })
    }

    createUser() {
        //create user using states
        Actions.user({ user: 'admin' });
    }

    listItems() {
        return this.state.offers.map((e, i) => {
            return <View key={i} style={{ flex: 1, flexDirection: 'row', width: '100%', height: 37, borderBottomWidth: 1, borderBottomColor: '#928A97', justifyContent: 'center' }}>
                <Text style={styles.destText}>{e.name}</Text>
                <TouchableOpacity style={styles.delete} onPress={() => { this.deleteOffer(e.name) }}>
                    <Image source={require('./ico/delete.png')} />
                </TouchableOpacity>
            </View>
        })
    }

    listStudents() {
        return this.state.users.map((e, i) => {
            if (e.type == 'student') {
                return <View key={i} style={{ flex: 1, flexDirection: 'row', width: '100%', height: 37, borderBottomWidth: 1, borderBottomColor: '#928A97', justifyContent: 'center' }}>
                    <Text style={styles.destText}>{e.name}</Text>
                    <TouchableOpacity style={styles.delete} onPress={() => { this.deletedUser(e.name) }}>
                        <Image source={require('./ico/delete.png')} />
                    </TouchableOpacity>
                </View>
            }
        })
    }

    listOrganisators() {
        return this.state.users.map((e, i) => {
            if (e.type == 'organisator') {
                return <View key={i} style={{ flex: 1, flexDirection: 'row', width: '100%', height: 37, borderBottomWidth: 1, borderBottomColor: '#928A97', justifyContent: 'center' }}>
                    <Text style={styles.destText}>{e.name}</Text>
                    <TouchableOpacity style={styles.delete} onPress={() => { this.deletedUser(e.name) }}>
                        <Image source={require('./ico/delete.png')} />
                    </TouchableOpacity>
                </View>
            }
        })
    }


    render() {

        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <View style={styles.logout}>
                        <TouchableOpacity style={styles.logoutbtn} onPress={this.logout}>
                            <Image source={require('./ico/log.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerTitle}>
                        <Text style={styles.title}>StudentTuorsitApp</Text>
                    </View>
                </View>




                <View style={styles.body}>

                    {this.state.selectedTab == 'offers' &&
                        <View style={{ flex: 1, width: '100%', height: '100%', margin: 7 }}>
                            <Text style={styles.listTitle}>List of tourist offers:</Text>
                            <ScrollView>
                                {this.listItems()}
                            </ScrollView>

                        </View>
                    }

                    {this.state.selectedTab == 'students' &&
                        <View style={{ flex: 1, width: '100%', height: '100%', margin: 7 }}>
                            <Text style={styles.listTitle}>List of Registreted Students:</Text>
                            <ScrollView>
                                {this.listStudents()}
                            </ScrollView>
                        </View>
                    }

                    {this.state.selectedTab == 'managers' &&
                        <View style={{ flex: 1, width: '100%', height: '100%', margin: 7 }}>
                            <Text style={styles.listTitle}>List of Tour Managers:</Text>
                            <ScrollView>
                                {this.listOrganisators()}
                            </ScrollView>

                            <View style={styles.newbtn}>
                                <TouchableOpacity style={styles.createnew} onPress={this.logout}>
                                    <Text style={styles.createnewtext} onPress={this.createUser}> Create New </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }

                </View>

                <View style={styles.tabView} >

                    <TouchableOpacity style={styles.tab} onPress={() => this.setState({ selectedTab: 'managers' })}>
                        <Image source={this.state.selectedTab == 'managers' ? require('./ico/manager.png') : require('./ico/managerOff.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tab} onPress={() => this.setState({ selectedTab: 'students' })}>
                        <Image source={this.state.selectedTab == 'students' ? require('./ico/student.png') : require('./ico/studentOff.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tab} onPress={() => this.setState({ selectedTab: 'offers' })}>
                        <Image source={this.state.selectedTab == 'offers' ? require('./ico/tour.png') : require('./ico/tourOff.png')} />
                    </TouchableOpacity>

                </View>

                {/* <View style={styles.footer}>
                    <Text style={styles.footerText}>by Dragana Mitrovic</Text>
                </View> */}

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
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-start'
    },

    logoutbtn: {
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
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10,
        paddingTop: 70,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    listView: {
        flex: 8,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    delete: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
        width: 32,
        height: 32
    },

    name: {
        flex: 2,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    destText: {
        textAlign: 'left',
        color: 'black',
        alignSelf: 'center',
        paddingTop: 5,
        width: '100%',
        fontSize: 16,
        width: 270,
        height: 35
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
        backgroundColor: '#f85959'
    },

    footerText: {
        textAlign: 'right',
        color: 'gray',
        alignSelf: 'flex-end',
        width: '100%',
        fontSize: 12
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
        width: 130,
        height: 30,
        backgroundColor: '#f85959',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
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
        height: '100%',
        justifyContent: 'center'
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
        backgroundColor: 'white'
    },


})