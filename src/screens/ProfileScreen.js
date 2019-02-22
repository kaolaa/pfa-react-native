import React, {Component} from 'react';
import {Text, StyleSheet, View,Image} from 'react-native';
import axios from 'axios';
const profileIcon = require('../../assets/images/pages/picture.png');
import {AsyncStorage} from 'react-native';

export default class Profile extends Component {
  state = {
    rowdata:['5'],
    
  };
  componentDidMount() {
   AsyncStorage.getItem("userID").then((value) => {
      const id = value 
      axios.get('http://192.168.1.6:5000/api/users/'+ id ).
      then(res => {
         this.setState({ rowdata :res.data }); 
         console.log('hey user');       
      })  
   }).done();
  
  }

  render() {
    const user = this.state.rowdata;
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={profileIcon}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}> {user.nom} {user.prenom}</Text>
              <Text style={styles.info}>{user.Filiere}</Text>
              <Text style={styles.description}>Email: {user.email}</Text>
              <Text style={styles.description}>telephone: {user.telephone}</Text>
              <Text style={styles.descriptionbottom}>Si vous voullez changer vos information veuillez nous envoyer un ticket, merci :)</Text>             
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#503E93",
    height:120,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:70
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#503E93",
    marginTop:10
  },
  description:{
    fontSize:13,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  descriptionbottom: {
    fontSize:11,
    color: "#696969",
    marginTop:10,
    textAlign: 'center',
    marginTop:110
}
});
 