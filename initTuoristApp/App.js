import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router } from 'react-native-router-flux';
import Routes from './Router';
import Realm from 'realm';

export default class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { realm: null };
  // }

  componentWillMount() {
    global.user = [
      {img: '', name: 'Dragana Mitrovic', address: '', username: 'admin', password: 'admin', type: 'admin'},
      {img: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg', name: 'Justine Henderson', address: 'Greenhill Rd., Saint Ives', username: 'manager', password: 'manager', type: 'manager'},
      {img: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg', name: 'Emmit Boyer', address: 'Erica Rd., Kilmancom', username: 'emmit', password: '123', type: 'manager'},
      {img: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg', name: 'Lia Shelton', address: 'Ripple Streat, Oscoda', username: 'lia', password: '456', type: 'manager'},
      {img: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg', name: 'Marcus Dalton', address: 'Shireley Ave., West Chicago', username: 'student', password: 'student', type: 'student'},
      {img: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg', name: 'Thalia Cobb', address: 'Goldfield Rd., Honolulu', username: 'thalia', password: '123', type: 'student'},
      {img: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg', name: 'Adrian Black', address: 'Livingstone Rd., Gilingham', username: 'adrian', password: '123', type: 'student'},
      {img: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg', name: 'Teagan Wise', address: 'Kent Ave., Portsmouth', username: 'wise', password: '159', type: 'student'},
      {img: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg', name: 'Theo Baker', address: 'Hillside, Ellesmere Port', username: 'theo', password: '123', type: 'student'},
      {img: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg', name: 'Oscar Wood', address: 'White Rose Ln., Working', username: 'oscar', password: '123456', type: 'student'}
       // {img: '', name: 'Yoongi Min', address: 'Deagu, Seoul', username: '', password: '', type: 'student'},

      //  {img: '', name: 'Dragana Mitrovic', address: '', username: 'admin', password: 'admin', type: 'admin'},
      //  {img: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg', name: 'Justine Henderson', address: 'Greenhill Rd., Saint Ives', username: 'manager', password: 'manager', type: 'manager'},
      //  {img: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg', name: 'Emmit Boyer', address: 'Erica Rd., Kilmancom', username: 'emmit', password: '123', type: 'manager'},
      //  {img: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg', name: 'Lia Shelton', address: 'Ripple Streat, Oscoda', username: 'lia', password: '456', type: 'manager'},
      //  {img: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg', name: 'Marcus Dalton', address: 'Shireley Ave., West Chicago', username: 'student', password: 'student', type: 'student'},
      //  {img: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg', name: 'Thalia Cobb', address: 'Goldfield Rd., Honolulu', username: 'thalia', password: '123', type: 'student'},
      //  {img: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg', name: 'Adrian Black', address: 'Livingstone Rd., Gilingham', username: 'adrian', password: '123', type: 'student'},
      //  {img: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg', name: 'Teagan Wise', address: 'Kent Ave., Portsmouth', username: 'wise', password: '159', type: 'student'},
      //  {img: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg', name: 'Theo Baker', address: 'Hillside, Ellesmere Port', username: 'theo', password: '123', type: 'student'},
      //  {img: 'http://www.cmcstir.org/wp-content/uploads/2013/07/img08.jpg', name: 'Oscar Wood', address: 'White Rose Ln., Working', username: 'oscar', password: '123456', type: 'student'},
       
    ];

    global.trip = [
      {name: 'Paris for 2 days', date: '02.01.2018.-04.01.2018.', manager: 'manager', price: '1000', desc: 'On 02.01. at 05:00h we will go to Paris and be back by 04.01. 22:00h. The trips lasts for three days and two nights. Price includes two nights in hotel with breakfast. ', img: 'http://www.iconhot.com/icon/png/file-icons-vs-2/256/jpg-2.png'},
      {img: 'http://www.iconhot.com/icon/png/file-icons-vs-2/256/jpg-2.png', name: 'Dubai - 10 days', date: '5.5.2018-15.5.2018.', price: '9200', manager: 'manager', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque tortor vel tincidunt tempus. Vivamus at molestie enim. Vivamus eleifend tempor nisl a laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras luctus lobortis quam eget volutpat. Sed a vulputate sapien.' },
      {img: 'http://www.iconhot.com/icon/png/file-icons-vs-2/256/jpg-2.png', name: 'Tailand - 8 days', date: '1.6.2018-9.6.2018', price: '6500', manager: 'emmit', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque tortor vel tincidunt tempus. Vivamus at molestie enim. Vivamus eleifend tempor nisl a laoreet. Magnis dis parturient montes, nascetur ridiculus mus. Cras luctus lobortis quam eget volutpat. Sed a vulputate sapien.', },
      {img: 'http://www.iconhot.com/icon/png/file-icons-vs-2/256/jpg-2.png', name: 'Rome - 5 days', date: '15.9.2018-20.9.2018', price: '3400', manager: 'lia', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque tortor vel tincidunt tempus. Vivamus at molestie enim. Vivamus eleifend tempor nisl a laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed a vulputate sapien.', },
      {img: 'http://www.iconhot.com/icon/png/file-icons-vs-2/256/jpg-2.png', name: 'Barselona - 6 days', date: '2.2.2018-8.2.2018', price: '4500', manager: 'manager', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque tortor vel tincidunt tempus. Vivamus at molestie enim. Vivamus eleifend tempor nisl a laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras luctus lobortis quam eget volutpat. Sed a vulputate sapien.', },
      {img: 'http://www.iconhot.com/icon/png/file-icons-vs-2/256/jpg-2.png', name: 'Lisabon - 7 days', date: '1.7.2018-8.7.2018', price: '6800', manager: 'lia', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque tortor vel tincidunt tempus. Vivamus at molestie enim. Vivamus eleifend tempor nisl a laoreet. Orci varius natoque penatibus et magnis dis parturient Cras luctus lobortis quam eget volutpat. Sed a vulputate sapien.', },
      {img: 'http://www.iconhot.com/icon/png/file-icons-vs-2/256/jpg-2.png', name: 'Egypt - 14 days', date: '15.9.2018-29.9.2018', price: '12400', manager: 'lia', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque tortor vel tincidunt tempus. Vivamus at molestie enim. Vivamus eleifend tempor nisl a laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras luctus lobortis quam eget volutpat.', },
    
      // {name: 'Paris for 2 days', date: '02.01.2018.-04.01.2018.', manager: 'manager', price: '1000', desc: 'On 02.01. at 05:00h we will go to Paris and be back by 04.01. 22:00h. The trips lasts for three days and two nights. Price includes two nights in hotel with breakfast. ', img: 'http://www.iconhot.com/icon/png/file-icons-vs-2/256/jpg-2.png'},
      // {img: 'http://www.iconhot.com/icon/png/file-icons-vs-2/256/jpg-2.png', name: 'Dubai - 10 days', date: '5.5.2018-15.5.2018.', price: '9200', manager: 'manager', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque tortor vel tincidunt tempus. Vivamus at molestie enim. Vivamus eleifend tempor nisl a laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras luctus lobortis quam eget volutpat. Sed a vulputate sapien.' },
      // {img: 'http://www.iconhot.com/icon/png/file-icons-vs-2/256/jpg-2.png', name: 'Tailand - 8 days', date: '1.6.2018-9.6.2018', price: '6500', manager: 'emmit', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque tortor vel tincidunt tempus. Vivamus at molestie enim. Vivamus eleifend tempor nisl a laoreet. Magnis dis parturient montes, nascetur ridiculus mus. Cras luctus lobortis quam eget volutpat. Sed a vulputate sapien.', },
      // {img: 'http://www.iconhot.com/icon/png/file-icons-vs-2/256/jpg-2.png', name: 'Rome - 5 days', date: '15.9.2018-20.9.2018', price: '3400', manager: 'lia', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque tortor vel tincidunt tempus. Vivamus at molestie enim. Vivamus eleifend tempor nisl a laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed a vulputate sapien.', },
      // {img: 'http://www.iconhot.com/icon/png/file-icons-vs-2/256/jpg-2.png', name: 'Barselona - 6 days', date: '2.2.2018-8.2.2018', price: '4500', manager: 'manager', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque tortor vel tincidunt tempus. Vivamus at molestie enim. Vivamus eleifend tempor nisl a laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras luctus lobortis quam eget volutpat. Sed a vulputate sapien.', },
      // {img: 'http://www.iconhot.com/icon/png/file-icons-vs-2/256/jpg-2.png', name: 'Lisabon - 7 days', date: '1.7.2018-8.7.2018', price: '6800', manager: 'lia', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque tortor vel tincidunt tempus. Vivamus at molestie enim. Vivamus eleifend tempor nisl a laoreet. Orci varius natoque penatibus et magnis dis parturient Cras luctus lobortis quam eget volutpat. Sed a vulputate sapien.', },
      // {img: 'http://www.iconhot.com/icon/png/file-icons-vs-2/256/jpg-2.png', name: 'Egypt - 14 days', date: '15.9.2018-29.9.2018', price: '12400', manager: 'lia', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque tortor vel tincidunt tempus. Vivamus at molestie enim. Vivamus eleifend tempor nisl a laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras luctus lobortis quam eget volutpat.', },
    
    ];
    
    global.booked = [];
  }

  // componentWillMount(){
  //   Realm.open({
  //     schema: [{name: 'Dog', properties: {name: 'string'}}]
  //   }).then(realm => {
  //     realm.write(() => {
  //       realm.create('Dog', {name: 'Rex'});
  //     });
  //     this.setState({ realm });
  //   });
  // }
  
  render() {
    // const info = this.state.realm
    // ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
    // : 'Loading...';

  return (
    // <View style={styles.container}>
    //   <Text style={styles.welcome}>
    //     {info}
    //   </Text>
    // </View>

    <Routes />
  );
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
});
