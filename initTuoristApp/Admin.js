import React, { Component } from 'react';
import { Alert, Dimensions, View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TabNavigator from 'react-native-tab-navigator';

export default class Admin extends React.Component {

    state = {
        dashboard: 'list',
        selectedTab: 'managers',
        offers: [],
        users: [],

        Uname: '',
        Uaddress: '',
        Uusername: '',
        Upassword: '',
        Uimg: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg',
    }

    componentWillMount() {
        this.setState({ offers: global.trip, users: global.user });
    }

    componentWillUnmount() {
        global.user = [];
        global.user = this.state.users;
        global.trip = [];
        global.trip = this.state.offers;
    }

    logout() {
        Actions.reset('login');
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

    createUser = () => {
        //create user using states
        this.setState({ dashboard: 'user' });
    }

    submitUser = () => {
        if (this.state.Uname != '' && this.state.Upassword != '' && this.state.Uusername != '') {
            if (this.state.Uimg == '') {
                let newUser = { img: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg', name: this.state.Uname, address: this.state.Uaddress, username: this.state.Uusername, password: this.state.Upassword, type: 'organisator' };
                let list = this.state.users;
                list.push(newUser);
                JSON.stringify(list, null, ' ');
                this.setState({ users: list, dashboard: 'list' });
            } else {
                let newUser = { img: this.state.Uimg, name: this.state.Uname, address: this.state.Uaddress, username: this.state.Uusername, password: this.state.Upassword, type: 'organisator' };
                let list = this.state.users;
                list.push(newUser);
                JSON.stringify(list, null, ' ');
                this.setState({ users: list, dashboard: 'list' });
            }

        } else {
            Alert.alert('You have to fill in Name, Username and Password fields to submit.')
        }
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



                {this.state.dashboard == 'list' &&

                    <View style={{ flex: 15, justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>

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
                                        <TouchableOpacity style={styles.createnew} onPress={this.createUser}>
                                            <Image style={{ width: 50, height: 50 }} source={require('./ico/add.png')} />
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

                                <Text style={{ padding: 5, paddingBottom: 5, paddingTop: 10, color: 'black', fontStyle: 'italic', textAlign: 'left', fontSize: 14 }}> All fields marked with an asterisk (*) are required.</Text>
                                <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', textAlign: 'left', fontSize: 16 }}>* Full Name</Text>
                                <TextInput style={styles.input}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder={this.state.Uname}
                                    placeholderTextColor="black"
                                    returnKeyType="go"
                                    ref={(input) => this.Uname = input}
                                    onChangeText={Uname => this.setState({ Uname: Uname })}
                                />
                                <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', textAlign: 'left', fontSize: 16 }}>* Username</Text>
                                <TextInput style={styles.input}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder={this.state.Uusername}
                                    placeholderTextColor="black"
                                    returnKeyType="go"
                                    ref={(input) => this.Uusername = input}
                                    onChangeText={Uusername => this.setState({ Uusername: Uusername })}
                                />
                                <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', textAlign: 'left', fontSize: 16 }}>* Password</Text>
                                <TextInput style={styles.input}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder={this.state.Upassword}
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
                                    // placeholder={this.state.Uimg}
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

    delete: {
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