import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Image, ScrollView } from 'react-native';

export default class Ponuda extends React.Component {

    state = {
        Pname: '',
        Pdesc: '',
        Pimg: '',
        Pdate: '',
        Porganisator: ''
    }

    componentDidMount() {
        this.setState({ Pname: this.props.Pname, Pdate: this.props.Pdate, Porganisator: this.props.Porganisator, Pdesc: this.props.Pdesc, Pimg: this.props.Pimg })
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
                                source={{ uri: this.props.Pimg }}
                            />

                        </View>

                        <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>

                            <Text style={{ padding: 10, color: '#F0FFF3', fontWeight: 'bold', width: '100%', textAlign: 'center' }}>Picture of Journey</Text>
                            <TextInput style={styles.inputUri}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder={this.props.Pimg}
                                placeholderTextColor="#928A97"
                                returnKeyType="go"
                                ref={(input) => this.Pimg = input}
                                onChangeText={Pimg => this.setState({ Pimg: Pimg })}
                            />
                            <Text style={{ padding: 10, color: '#F0FFF3', fontWeight: 'bold', textAlign: 'center' }}>Journey Name</Text>
                            <TextInput style={styles.input}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder={this.props.Pname}
                                placeholderTextColor="#928A97"
                                returnKeyType="go"
                                ref={(input) => this.Pname = input}
                                onChangeText={Pname => this.setState({ Pname: Pname })}
                            />
                            <Text style={{ padding: 10, color: '#F0FFF3', fontWeight: 'bold', textAlign: 'center' }}>Journey Date</Text>
                            <TextInput style={styles.input}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder={this.props.Pdate}
                                placeholderTextColor="#928A97"
                                returnKeyType="go"
                                ref={(input) => this.Pdate = input}
                                onChangeText={Pdate => this.setState({ Pdate: Pdate })}
                            />
                            <Text style={{ padding: 10, color: '#F0FFF3', fontWeight: 'bold', textAlign: 'center' }}>Organisator of Journey</Text>
                            <TextInput style={styles.input}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder={this.props.Porganisator}
                                placeholderTextColor="#928A97"
                                returnKeyType="go"
                                ref={(input) => this.Porganisator = input}
                                onChangeText={Porganisator => this.setState({ Porganisator: Porganisator })}
                            />
                            <Text style={{ padding: 10, color: '#F0FFF3', fontWeight: 'bold', textAlign: 'center' }}>Journey Description</Text>
                            <TextInput style={styles.inputDesc}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder={this.props.Pdesc}
                                placeholderTextColor="#928A97"
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

    inputDesc: {
        width: 250,
        height: 150,
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