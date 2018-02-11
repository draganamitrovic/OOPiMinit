import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, Alert, Dimensions, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Organizator extends React.Component {
    state = {
        dashboard: 'list',
        selectedTab: 'offers',
        offers: [],
        users: [],

        Pname: '',
        Pdesc: '',
        Pimg: 'http://www.iconhot.com/icon/png/file-icons-vs-2/256/jpg-2.png',
        Pdate: '',
        Porganisator: '',
        Pprice: ''
    }

    componentWillMount() {
        this.setState({ offers: global.trip, users: global.user })
    }

    componentWillUnmount() {
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

    submitTrip = () => {
        if (this.state.Pname != '' && this.state.Pdate != '') {
            if (this.state.Pimg == '') {
                let newTrip = { img: 'http://www.iconhot.com/icon/png/file-icons-vs-2/256/jpg-2.png', name: this.state.Pname, desc: this.state.Pdesc, date: this.state.Pdate, organisator: this.state.Porganisator, price: this.state.Pprice };
                let list = this.state.offers;
                list.push(newTrip);
                JSON.stringify(list, null, ' ');
                this.setState({ offers: list });
            } else {
                let newTrip = { img: this.state.Pimg, name: this.state.Pname, desc: this.state.Pdesc, date: this.state.Pdate, organisator: this.state.Porganisator, price: this.state.Pprice };
                let list = this.state.offers;
                list.push(newTrip);
                JSON.stringify(list, null, ' ');
                this.setState({ offers: list });
            }

        } else {
            Alert.alert('You have to fill in Name and Date fields to submit.')
        }
    }

    createTrip = () => {
        // Actions.trip();
        this.setState({ dashboard: 'offer' });
    }

    listItems() {
        return this.state.offers.map((e, i) => {
            return <View key={i} style={{ flex: 1, flexDirection: 'row', padding: 10, width: '100%', height: 37, borderBottomWidth: 1, borderBottomColor: '#928A97', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.destText}>{e.name}</Text>
                <TouchableOpacity style={styles.delete} onPress={() => { this.deleteOffer(e.name) }}>
                    <Image source={require('./ico/delete.png')} />
                </TouchableOpacity>
            </View>
        })
    }

    listStudents() {
        return this.state.users.map((e, i) => {
            return <View key={i} style={{ flex: 1, flexDirection: 'row', padding: 10, width: '100%', height: 37, borderBottomWidth: 1, borderBottomColor: '#928A97', justifyContent: 'center' }}>
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
                                    <Text style={styles.listTitle}>List of Tourist Offers:</Text>
                                    <ScrollView>
                                        {this.listItems()}
                                    </ScrollView>

                                    <View style={styles.newbtn}>
                                        <TouchableOpacity style={styles.createnew} onPress={this.createTrip}>
                                            <Image style={{ width: 50, height: 50 }} source={require('./ico/add.png')} />
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

                        <View style={styles.tabView} >

                            <TouchableOpacity style={styles.tab} onPress={() => this.setState({ selectedTab: 'offers' })}>
                                <Image source={this.state.selectedTab == 'offers' ? require('./ico/tour.png') : require('./ico/tourOff.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.tab} onPress={() => this.setState({ selectedTab: 'students' })}>
                                <Image source={this.state.selectedTab == 'students' ? require('./ico/student.png') : require('./ico/studentOff.png')} />
                            </TouchableOpacity>

                        </View>
                    </View>
                }

                {this.state.dashboard == 'offer' &&

                    <View style={styles.body}>
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ width: '100%', alignItems: 'center' }} >
                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                <Image
                                    style={{ width: 200, height: 200, borderRadius: 5 }}
                                    source={{ uri: this.state.Pimg }}
                                />
                            </View>

                            <View style={{ width: Dimensions.get('window').width, justifyContent: 'flex-start', alignItems: 'flex-start' }}>

                                <Text style={{ padding: 5, paddingBottom: 5, paddingTop: 10, color: 'black', fontStyle: 'italic', textAlign: 'left', fontSize: 14 }}> All fields marked with an asterisk (*) are required.</Text>

                                <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>* Tourist Offer Name</Text>
                                <TextInput style={styles.input}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder={this.props.Pname}
                                    placeholderTextColor="gray"
                                    returnKeyType="go"
                                    ref={(input) => this.Pname = input}
                                    onChangeText={Pname => this.setState({ Pname: Pname })}
                                />
                                <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>* Tourist Offer Date</Text>
                                <TextInput style={styles.input}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder={this.props.Pdate}
                                    placeholderTextColor="gray"
                                    returnKeyType="go"
                                    ref={(input) => this.Pdate = input}
                                    onChangeText={Pdate => this.setState({ Pdate: Pdate })}
                                />
                                <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Tourist Offer Price</Text>
                                <TextInput style={styles.input}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder={this.props.Pprice}
                                    placeholderTextColor="gray"
                                    returnKeyType="go"
                                    ref={(input) => this.Pprice = input}
                                    onChangeText={Pprice => this.setState({ Pprice: Pprice })}
                                />
                                <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Organisator of Tourist Offer</Text>
                                <TextInput style={styles.input}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder={this.props.Porganisator}
                                    placeholderTextColor="gray"
                                    returnKeyType="go"
                                    ref={(input) => this.Porganisator = input}
                                    onChangeText={Porganisator => this.setState({ Porganisator: Porganisator })}
                                />
                                <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Tourist Offer Description</Text>
                                <TextInput style={styles.inputDesc}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder={this.props.Pdesc}
                                    placeholderTextColor="gray"
                                    returnKeyType="go"
                                    ref={(input) => this.Pdesc = input}
                                    onChangeText={Pdesc => this.setState({ Pdesc: Pdesc })}
                                    multiline={true}
                                />
                                <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', width: '100%', textAlign: 'left' }}>Picture of Tourist Offer</Text>
                                <TextInput style={styles.input}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholderTextColor="gray"
                                    returnKeyType="go"
                                    ref={(input) => this.Pimg = input}
                                    onChangeText={Pimg => this.setState({ Pimg: Pimg })}
                                />
                                <TouchableOpacity style={styles.submitBtn} onPress={this.submitTrip}>
                                    <Text style={styles.submitText}> Submit</Text>
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
        zIndex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#e8e8e8',
        alignItems: 'center',
        justifyContent: 'center'
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

    details: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
        width: 32,
        height: 32
    },

    delete: {
        flex: 1,
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
        flex: 6,
        textAlign: 'left',
        color: 'black',
        alignSelf: 'center',
        width: '100%',
        fontSize: 16,
        fontWeight: 'bold',
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