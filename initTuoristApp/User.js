import React, { Component } from 'react';
import { Dimensions, View, StyleSheet, TouchableOpacity, Text, TextInput, Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class User extends React.Component {

    state = {
        Uname: '',
        Uaddress: '',
        Uusername: '',
        Upassword: '',
        Uimg: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg',
        user: '',
        usernameLogin: ''
    }

    componentWillMount() {

        this.setState({ usernameLogin: this.props.usernameLogin, user: this.props.user, Uusername: 'setovan sam'});

        if (this.state.usernameLogin != '') {
            global.user.map((e) => {
                if (e.name == this.state.usernameLogin) {
                    this.setState({ Uname: e.name, Uaddress: e.address, Uusername: 'if funkcija ne radi', Upassword: e.password, Uimg: e.img });
                }
            })

        }
    }

    back() {
        Actions.pop();
    }

    submitUser = () => {

        switch (this.state.user) {
            case 'admin':
                {
                    let newUser = { img: this.state.Uimg, name: this.state.Uname, address: this.state.Uaddress, username: this.state.Uusername, password: this.state.Upassword, type: 'organisator' };
                    global.user.push(newUser);
                    Actions.admin();
                }
                break;
            case 'student':
                {
                    let newUser = { img: this.state.Uimg, name: this.state.Uname, address: this.state.Uaddress, username: this.state.Uusername, password: this.state.Upassword, type: 'organisator' };
                    global.user.push(newUser);
                    Actions.admin({ newUser: newUser });
                }
                break;
            case 'user':
                {
                    global.user.map((e) => {
                        if (e.name == this.state.name) {
                            global.user.pop(e);
                            let newUser = { img: this.state.Uimg, name: this.state.Uname, address: this.state.Uaddress, username: this.state.Uusername, password: this.state.Upassword, type: 'organisator' };
                            global.user.push(newUser);
                            Actions.admin({ newUser: newUser });
                        }
                    })

                }
                break;

        }

    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <View style={styles.logout}>
                        <TouchableOpacity style={styles.logoutbtn} onPress={this.back}>
                            <Text style={styles.logoutText}> Back </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerTitle}>
                        <Text style={styles.title}>StudentTuorsitApp</Text>
                    </View>
                </View>

                <View style={styles.body}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ width: Dimensions.get('window').width, alignItems: 'flex-start' }} >
                        <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10 }}>
                            <Image
                                style={{ width: 150, height: 150, borderRadius: 5, margin: 10 }}
                                source={{ uri: this.props.Uimg }}
                            />

                        </View>

                        <View style={{ width: Dimensions.get('window').widths, justifyContent: 'flex-start', alignItems: 'flex-start' }}>

                            <Text style={{ padding: 10, color: '#2d3a5a', fontWeight: 'bold', width: '100%', textAlign: 'left' }}>Picture Url</Text>
                            <TextInput style={styles.inputUri}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder={this.state.Uimg}
                                placeholderTextColor="#475b8d"
                                returnKeyType="go"
                                ref={(input) => this.Uimg = input}
                                onChangeText={Uimg => this.setState({ Uimg: Uimg })}
                            />
                            <Text style={{ padding: 10, color: '#2d3a5a', fontWeight: 'bold', textAlign: 'left' }}> Name</Text>
                            <TextInput style={styles.input}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder={this.state.Uname}
                                placeholderTextColor="#475b8d"
                                returnKeyType="go"
                                ref={(input) => this.Uname = input}
                                onChangeText={Uname => this.setState({ Uname: Uname })}
                            />
                            <Text style={{ padding: 10, color: '#2d3a5a', fontWeight: 'bold', textAlign: 'left' }}> Address</Text>
                            <TextInput style={styles.input}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder={this.state.Uaddress}
                                placeholderTextColor="#475b8d"
                                returnKeyType="go"
                                ref={(input) => this.Uaddress = input}
                                onChangeText={Uaddress => this.setState({ Uaddress: Uaddress })}
                            />
                            <Text style={{ padding: 10, color: '#2d3a5a', fontWeight: 'bold', textAlign: 'left' }}> Username</Text>
                            <TextInput style={styles.input}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder={this.state.Uusername}
                                placeholderTextColor="#475b8d"
                                returnKeyType="go"
                                ref={(input) => this.Uusername = input}
                                onChangeText={Uusername => this.setState({ Uusername: Uusername })}
                            />
                            <Text style={{ padding: 10, color: '#2d3a5a', fontWeight: 'bold', textAlign: 'left' }}> Password</Text>
                            <TextInput style={styles.input}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder={this.state.Upassword}
                                placeholderTextColor="#475b8d"
                                returnKeyType="go"
                                ref={(input) => this.Upassword = input}
                                secureTextEntry={true}
                                onChangeText={Upassword => this.setState({ Upassword: Upassword })}
                            />
                            <TouchableOpacity style={styles.submitBtn} onPress={this.submitUser}>
                                <Text style={styles.submitText}> Submit </Text>
                            </TouchableOpacity>

                        </View>
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
        borderColor: '#36456b'
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
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
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

    input: {
        width: Dimensions.get('window').width,
        height: 45,
        marginBottom: 5,
        backgroundColor: '#f6bda3',
        textAlign: 'left',
        padding: 0,
        paddingLeft: 10,
        borderBottomWidth: 2,
        borderColor: '#36456b'
    },

    submitBtn: {
        width: 100,
        height: 30,
        marginTop: 15,
        backgroundColor: '#36456b',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 7,
    },

    submitText: {
        color: '#f08a5d',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    inputUri: {
        width: Dimensions.get('window').width,
        height: 45,
        marginBottom: 5,
        backgroundColor: '#f6bda3',
        textAlign: 'left',
        padding: 0,
        paddingLeft: 10,
        borderBottomWidth: 2,
        borderColor: '#36456b'
    },
})