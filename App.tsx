import React, {useEffect, useState} from 'react';
import {GestureResponderEvent, Platform, SafeAreaView, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {PostList} from "./src/cars/PostList";
import {PostDetail} from "./src/cars/detail/PostDetail";
import {NewPost} from "./src/newPost/NewPost";
import { Profile } from './src/profile/Profile';
import { TouchableNativeFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();
// @ts-ignore
export default function App({ navigation }) {
    let [currentRoute, setCurrentRoute] = useState<string>('Post List');
    const navigationRef = useNavigationContainerRef();

    function setClass( name: string){
        if(currentRoute === name) {
            return styles.selected
        } else {
            return styles.unselected
        }
    }

    function setDivider() {
        if ( Platform.OS === 'android' ) {
            return  <View style={styles.divider} />
        }
    }

    function goTo(route: string) {
        let never: never;
        setCurrentRoute(currentRoute = route);
        navigationRef.navigate(route as never, {} as never);
    }

  // @ts-ignore
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Post List">
            <Stack.Screen name="Post List" component={PostList} />
            <Stack.Screen name="Post Detail" component={PostDetail} />
            <Stack.Screen name="Insert Post" component={NewPost} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
          <SafeAreaView style={styles.tabs}>
              <TouchableOpacity onPress={() => goTo('Post List')} style={styles.tab}><Text style={setClass('Post List')} > Post List </Text></TouchableOpacity>
              { setDivider()}
              <TouchableOpacity onPress={() => goTo('Insert Post')} style={styles.tab}><Text style={setClass('Insert Post')} > New Post </Text></TouchableOpacity>
              {setDivider()}
              <TouchableOpacity onPress={() => goTo('Profile')} style={styles.tab}><Text style={setClass('Profile')} > Profile </Text></TouchableOpacity>
          </SafeAreaView>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    tabs: {
      flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
      backgroundColor: "#FDFDFD",
        height: Platform.OS === 'ios' ? 100 : 70,
    },
    tab: {
        height: "100%",
        width: "33%",
        alignItems: "center",
        justifyContent: "center",
    },
    divider: {
      height: "100%",
        borderWidth: .5,
        borderColor: "#ACACAC"
    },
    unselected: {
        color : "#000"
    },
    selected: {
        color: "#0990f1",
        fontWeight: "500"
    }
});
