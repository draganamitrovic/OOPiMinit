import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

export default class User extends React.Component {
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
                    <View style={styles.listView}>
                    </View>
                    <View style={styles.listViewBtn}>
                    </View>
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
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10,
        paddingTop: 5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },


    listView: {
        flex: 8,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
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