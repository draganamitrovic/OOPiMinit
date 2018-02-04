import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Realm } from 'realm';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { realm: null };
    }

    componentWillMount() {
        Realm.open({
            schema: [UserSchema, TripSchema]
        })
            .then(realm => {
                realm.write(() => {
                    // realm.create('Dog', { name: 'Rex' });
                });
                this.setState({ realm });
            });
    }

    render() {

        const Realm = require('realm');

        const UserSchema = {
            name: 'User',
            properties: {
                name: 'string',
                email: 'string',
                address: 'string',
                picture: 'string',
                password: 'string'
            }
        };
        const TripSchema = {
            name: 'Trip',
            properties: {
                name: 'string',
                desc: 'string',
                date: 'string',
                price: 'string',
                picture: 'string',
                organisator: 'string',
            }
        };

        // Initialize a Realm with Car and Person models
        Realm.open({ schema: [CarSchema, PersonSchema] })
            .then(realm => {
                // ... use the realm instance to read and modify data
            })

        return (

            <View>

            </View>

        )
    }
}