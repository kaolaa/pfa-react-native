import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { StyleSheet, View, Platform, Text, ScrollView } from "react-native";

import { Entypo as Icon } from "@expo/vector-icons";

import { createAppContainer, createStackNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import TimeTableScreen from "../containers/TimeTableScreen";
import NoteScreen from "../containers/NoteScreen";
import ProfileScreen from "../containers/ProfileScreen";
import GalleryScreen from "../containers/GalleryScreen";
import NotificationScreen from '../containers/NotificationScreen';

import { Button, RadioGroup, Dropdown } from "../components";

// To use this screens please see the full version at https://reactnativestarter.com
// import ProfileScreen from '../containers/ProfileScreen';
// import ArticleScreen from '../containers/ArticleScreen';
// import ChatScreen from '../containers/chat/ChatScreen';
// import MessagesScreen from '../containers/chat/MessagesScreen';
// import ChartsScreen from '../containers/ChartsScreen';

import AvailableInFullVersion from "../screens/AvailableInFullVersion";

import { Colors, Fonts } from "../constants";

const headerBackground = require("../../assets/images/topBarBg.png");

const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator,

      navigationOptions: ({ navigation }) => {
        return {
          title: "UniTime",
          headerRight: (
            <Button
              style={styles.demoButton}
              action
              bgColor="#EF1F78"
              onPress={() =>navigation.navigate({routeName: 'Notification'})}
            >
              <Text>
                
                <Icon name="notification" size={17} color="white" />
              </Text>
            </Button>
          ),
          headerBackground: (
            <Image
              style={{
                flex: 1
              }}
              source={headerBackground}
              resizeMode="cover"
            />
          )
        };
      }
    },
    
    Gallery: {
      screen: GalleryScreen,
      navigationOptions: {
        title: "Gallery"
      }
    },
    Article: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null
      }
    },
    Chat: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null
      }
    },
    Messages: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null
      }
    },
    Charts: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null
      }
    },
    TimeTable: {
      screen: TimeTableScreen,
      navigationOptions: {
        title: "Emplois du temps"
      }
    },
    Note: {
      screen: NoteScreen,
      navigationOptions: {
        title: "Notes"
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: "Profile"
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        title: "Notification"
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        titleStyle: {
          fontFamily: Fonts.primaryLight
        },
        headerStyle: {
          backgroundColor: Colors.primary,
          borderBottomWidth: 0
        },
        headerBackground: (
          <Image
            style={{
              flex: 1
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
        headerTitleStyle: {
          color: Colors.white,
          fontFamily: Fonts.primaryRegular
        },
        headerTintColor: "#222222",
        headerLeft: props => (
          <TouchableOpacity
            onPress={props.onPress}
            style={{
              paddingLeft: 25
            }}
          >
            <Image
              source={require("../../assets/images/icons/arrow-back.png")}
              resizeMode="contain"
              style={{
                height: 20
              }}
            />
          </TouchableOpacity>
        )
      };
    }
  }
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bluish,
    paddingHorizontal: 15,
    paddingTop: 20
  },
  componentsSection: {
    backgroundColor: Colors.white,
    padding: 15,
    marginBottom: 20,
    borderRadius: 5
  },
  componentSectionHeader: {
    fontFamily: Fonts.primaryRegular,
    color: "#686868",
    fontSize: 20,
    marginBottom: 20
  },
  demoButtonsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between"
  },
  demoIconsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20
  },
  demoButton: {
    marginTop: 8,
    marginBottom: 8
  },
  demoItem: {
    marginVertical: 12
  }
});
export default createAppContainer(stackNavigator);
