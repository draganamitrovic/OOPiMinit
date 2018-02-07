import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Image, ScrollView } from 'react-native';

export default class User extends React.Component {

    state = {
        Uname: '',
        Uaddress: '',
        Uusername: '',
        Upassword: '',
        Uimg: ''
    }

    componentDidMount() {
        this.setState({ Uname: this.props.Uname, Uaddress: this.props.Uaddress, Uusername: this.props.Uusername, Upassword: this.props.Upassword, Uimg: this.props.Uimg })
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <View style={styles.logout}>
                        <TouchableOpacity style={styles.logoutbtn} onPress={this.login}>
                            <Text style={styles.logoutText}> Log out </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerTitle}>
                        <Text style={styles.title}>StudentTuorsitApp</Text>
                    </View>
                </View>

                <View style={styles.body}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ width: '100%', alignItems: 'center' }} >
                        <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10 }}>
                            <Image
                                style={{ width: 150, height: 150, borderRadius: 5, margin: 10 }}
                                source={{ uri: this.props.Uimg }}
                            />

                        </View>

                        <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>

                            <Text style={{ padding: 10, color: '#F0FFF3', fontWeight: 'bold', width: '100%', textAlign: 'center' }}>Your Picture Url</Text>
                            <TextInput style={styles.inputUri}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder={this.props.Uimg}
                                placeholderTextColor="#928A97"
                                returnKeyType="go"
                                ref={(input) => this.Uimg = input}
                                onChangeText={Uimg => this.setState({ Uimg: Uimg })}
                            />
                            <Text style={{ padding: 10, color: '#F0FFF3', fontWeight: 'bold', textAlign: 'center' }}>Your Name</Text>
                            <TextInput style={styles.input}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder={this.props.Uname}
                                placeholderTextColor="#928A97"
                                returnKeyType="go"
                                ref={(input) => this.Uname = input}
                                onChangeText={Uname => this.setState({ Uname: Uname })}
                            />
                            <Text style={{ padding: 10, color: '#F0FFF3', fontWeight: 'bold', textAlign: 'center' }}>Your Address</Text>
                            <TextInput style={styles.input}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder={this.props.Uaddress}
                                placeholderTextColor="#928A97"
                                returnKeyType="go"
                                ref={(input) => this.Uaddress = input}
                                onChangeText={Uaddress => this.setState({ Uaddress: Uaddress })}
                            />
                            <Text style={{ padding: 10, color: '#F0FFF3', fontWeight: 'bold', textAlign: 'center' }}>Your Username</Text>
                            <TextInput style={styles.input}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder={this.props.Uusername}
                                placeholderTextColor="#928A97"
                                returnKeyType="go"
                                ref={(input) => this.Uusername = input}
                                onChangeText={Uusername => this.setState({ Uusername: Uusername })}
                            />
                            <Text style={{ padding: 10, color: '#F0FFF3', fontWeight: 'bold', textAlign: 'center' }}>Your Password</Text>
                            <TextInput style={styles.input}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder={this.props.Upassword}
                                placeholderTextColor="#928A97"
                                returnKeyType="go"
                                ref={(input) => this.Upassword = input}
                                onChangeText={Upassword => this.setState({ Upassword: Upassword })}
                            />
                            <TouchableOpacity style={styles.submitBtn} onPress={this.login}>
                                <Text style={styles.submitText}> Submit Changes </Text>
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
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
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
        backgroundColor: '#213151'
    },

    footerText: {
        textAlign: 'right',
        color: '#928A97',
        alignSelf: 'flex-end',
        width: '100%',
        fontSize: 12
    },

    input: {
        width: 200,
        height: 25,
        marginBottom: 5,
        backgroundColor: '#F0FFF3',
        textAlign: 'left',
        padding: 0,
        paddingLeft: 10,

    },

    submitBtn: {
        width: 150,
        height: 30,
        marginTop: 15,
        backgroundColor: '#F85F73',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
    },

    submitText: {
        color: '#283C63',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    inputUri: {
        width: 270,
        height: 25,
        marginBottom: 5,
        backgroundColor: '#F0FFF3',
        textAlign: 'left',
        padding: 0,
        paddingLeft: 10,

    },
})