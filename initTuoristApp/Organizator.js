import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Organizator extends React.Component {
    state = {
        selectedTab: 'offers',
        offers: [],
        users: [],
    }

    componentWillMount() {
        this.setState({ offers: global.trip, users: global.user })
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

    createUser = () => {
        //create offer using states
    }

    listItems() {
        return this.state.offers.map((e, i) => {
            return <View key={i} style={{ flex: 1, flexDirection: 'row', width: '100%', height: 50, borderBottomWidth: 1, borderBottomColor: '#928A97' }}>
                <Text style={styles.destText}>{e.name}</Text>
                <TouchableOpacity style={styles.delete} onPress={() => { this.deleteOffer(e.name) }}>
                    <Text style={styles.deleteText}> DELETE </Text>
                </TouchableOpacity>
            </View>
        })
    }

    listStudents() {
        return this.state.users.map((e, i) => {
            return <View key={i} style={{ flex: 1, flexDirection: 'row', width: '100%', height: 30, borderBottomWidth: 1, borderBottomColor: '#928A97' }}>
                <Text style={styles.destText}>{e.name}</Text>
            </View>
        })
    }


    render() {

        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <View style={styles.logout}>
                        <TouchableOpacity style={styles.logoutbtn} onPress={this.logout}>
                            <Text style={styles.logoutText}> Log out </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerTitle}>
                        <Text style={styles.title}>StudentTuorsitApp</Text>
                    </View>
                </View>


                <View style={styles.tabView} >

                    <TouchableOpacity style={styles.tab} onPress={() => this.setState({ selectedTab: 'offers' })}>
                        <Image source={this.state.selectedTab == 'offers' ? require('./ico/tour.png') : require('./ico/tourOff.png')} />

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tab} onPress={() => this.setState({ selectedTab: 'students' })}>
                        <Image source={this.state.selectedTab == 'students' ? require('./ico/student.png') : require('./ico/studentOff.png')} />

                    </TouchableOpacity>

                </View>

                <View style={styles.body}>

                    {this.state.selectedTab == 'offers' &&
                        <View style={{ flex: 2, width: '100%', height: '100%', margin: 10 }}>
                            <Text style={styles.listTitle}>List of Tourist Offers:</Text>
                            <ScrollView>

                                {this.listItems()}

                            </ScrollView>
                            <View style={styles.newbtn}>
                                <TouchableOpacity style={styles.createnew} onPress={this.logout}>
                                    <Text style={styles.createnewtext}> Create New </Text>
                                </TouchableOpacity>
                            </View>

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
        zIndex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#f4ac8c',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },

    header: {
        flex: 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2d3a5a',
    },


    logout: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
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

    delete: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 25,
        backgroundColor: '#36456b',
        borderWidth: 2,
        borderColor: '#3f507c',
        margin: 10,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
    },

    deleteText: {
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

    destText: {
        textAlign: 'left',
        color: '#252f49',
        alignSelf: 'center',
        width: '100%',
        fontSize: 16,
        fontWeight: 'bold',
        width: 270
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

    listTitle: {
        fontSize: 18,
        width: '100%',
        textAlign: 'left',
        color: '#252f49',
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderBottomColor: '#928A97',
        paddingBottom: 10
    },

    createnew: {
        width: 130,
        height: 30,
        backgroundColor: '#36456b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 15
    },

    createnewtext: {
        color: '#ee7946',
        textAlign: 'center',
        paddingBottom: 3,
        paddingLeft: 2,
        fontSize: 14,
        fontWeight: 'bold'
    },

    newbtn: {

        alignItems: 'center',
        justifyContent: 'center'
    },

    tab: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4ac8c',
        margin: 2,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderWidth: 1,
        borderBottomColor: '#f4ac8c',
        borderColor: '#f08a5d'

    },
    tabView: {
        position: 'absolute',
        top: '14.5%',
        width: '100%',
        height: 50,
        flexDirection: 'row',
        flex: 1,
        zIndex: 3,
        backgroundColor: '#2d3a5a'
    },


})