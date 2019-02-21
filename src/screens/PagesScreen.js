import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView

} from 'react-native';
import {Entypo as Icon} from '@expo/vector-icons';
import {Colors, Fonts} from '../constants';

const chartIcon = require('../../assets/images/pages/chart.png');
const calendarIcon = require('../../assets/images/pages/calendar.png');
const chatIcon = require('../../assets/images/pages/chat.png');
const galleryIcon = require('../../assets/images/pages/gallery.png');
const profileIcon = require('../../assets/images/pages/profile.png');
const ticketIcon = require('../../assets/images/pages/tickets.png');
const noteIcon = require('../../assets/images/pages/file.png');
const AgendaIcon = require('../../assets/images/pages/clock.png');

export default function PagesScreen(props) {
  return (
    <ScrollView >
    <View style={styles.container}>
     <View>

     </View>
     <View >     
      <View style={styles.row}>
         <TouchableOpacity
          >
          <Image
            source={profileIcon}
            style={styles.avatar}
          />
        </TouchableOpacity>
        <View style={styles.avatarTitle}>
          <Text style={styles.itemText}>Hassan gol</Text>
        <Text style={styles.itemText}>4iir</Text>

        </View>
        
      </View>
      </View>
     
    <View >
    <Text style={styles.Title}>Vos cours aujourd'huit</Text>
    <ScrollView horizontal={true}>

    <View style={styles.row}>
    <TouchableOpacity
        style={styles.itemTwoContainer}
        >
        <View style={styles.itemTwoContent}>
          <Image style={styles.itemTwoImage}  />
          <View style={styles.itemTwoOverlay} />
          <Text style={styles.itemTwoTitle}>JAVASCRIPT</Text>
          <Text style={styles.itemTwoSubTitle}>local: Agdal</Text>
          <Text style={styles.itemTwoPrice}>salle: 4B</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemTwoContainer}
        >
        <View style={styles.itemTwoContent}>
          <Image style={styles.itemTwoImage}  />
          <View style={styles.itemTwoOverlay} />
          <Text style={styles.itemTwoTitle}>TCP/IP</Text>
          <Text style={styles.itemTwoSubTitle}>local: Agdal</Text>
          <Text style={styles.itemTwoPrice}>salle: 3B</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.itemTwoContainer}
        >
        <View style={styles.itemTwoContent}>
          <Image style={styles.itemTwoImage}  />
          <View style={styles.itemTwoOverlay} />
          <Text style={styles.itemTwoTitle}>TCP/IP</Text>
          <Text style={styles.itemTwoSubTitle}>local: Agdal</Text>
          <Text style={styles.itemTwoPrice}>salle: 3B</Text>
        </View>
      </TouchableOpacity>
      
     </View>
</ScrollView>
    </View>
     <View > 
     <Text style={styles.Title}>Actions</Text>
     <View style={styles.row}>
       <TouchableOpacity
         onPress={() => props.navigation.navigate({routeName: 'Profile'})}
         style={styles.item}>
         <Image
           resizeMode="contain"
           source={profileIcon}
           style={styles.itemImage}
         />
         <Text style={styles.itemText}>Profile</Text>
       </TouchableOpacity>
       
       <TouchableOpacity
         onPress={() => props.navigation.navigate({routeName: 'TimeTable'})}
         style={styles.item}>
         <Image
           resizeMode="contain"
           source={calendarIcon}
           style={styles.itemImage}
         />
         <Text style={styles.itemText}>Emplois</Text>
       </TouchableOpacity>
       <TouchableOpacity
         onPress={() => props.navigation.navigate({routeName: 'Gallery'})}
         style={styles.item}>
         <Image
           resizeMode="contain"
           source={galleryIcon}
           style={styles.itemImage}
         />
         <Text style={styles.itemText}>gallery</Text>
       </TouchableOpacity>
     </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({routeName: 'Note'})}
          style={styles.item}>
          <Image
            resizeMode="contain"
            source={noteIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Notes</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => props.navigation.navigate({routeName: 'Calendar'})}
          style={styles.item}>
          <Image
            resizeMode="contain"
            source={AgendaIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({routeName: 'Gallery'})}
          style={styles.item}>
          <Image
            resizeMode="contain"
            source={ticketIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Ticket</Text>
        </TouchableOpacity>
      </View>
      </View>
     
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 10,
  },
  Title: {
    paddingHorizontal: 20,

    fontFamily: Fonts.primaryBold,
    fontSize: 16,
    color: '#5F5F5F',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 120,
    paddingVertical: 20,
    borderColor: Colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 63,
    borderWidth: 1,
    borderColor: '#6271da',
    marginBottom:10,
    position: 'relative',
    marginTop:10
  },
  avatarTitle: {
    paddingHorizontal :10,
    paddingTop: 40,
    flex: 1,
    flexDirection: 'column',
  },
  avatarImage: {
    height: 35,

    position: 'absolute',
    top: 15,
    left: -27,
    right: 0,
    bottom: 0,
  },
  itemText: {
    color: Colors.primary,
    fontFamily: Fonts.primary,
  },
  itemImage: {
    height: 35,
  },

  // cours 
  itemTwoContainer: {
    paddingBottom: 10,
    backgroundColor: 'white',
    marginVertical: 5,
  },
  itemTwoContent: {
    padding: 20,
    position: 'relative',
    marginHorizontal: Platform.OS === 'ios' ? -15 : 3,
    height: 150,
    width: 160
   
  },
  itemTwoTitle: {
    color: Colors.white,
    fontFamily: Fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoSubTitle: {
    color: Colors.white,
    fontFamily: Fonts.primaryRegular,
    fontSize: 15,
    marginVertical: 5,
  },
  itemTwoPrice: {
    color: Colors.white,
    fontFamily: Fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  itemTwoOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#6271da',
    opacity: 0.5,
  },
});
