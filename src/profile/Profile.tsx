import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import axios from "axios";
import {User} from "../../Models/models";

// @ts-ignore
export function Profile ({ navigation }) {

    let [user, setUser] = useState<User>({
        address: undefined,
        company: undefined,
        email: "",
        id: 0,
        name: "",
        phone: "",
        username: "",
        website: ""
    });

    function setId() {
        return (Math.floor(Math.random() * 10) + 1).toString()
    }

    useEffect(()=> {
        console.log(setId());
        axios.get('https://jsonplaceholder.typicode.com/users/' + setId()).then(( data ) => {
            setUser(user => data.data)
            console.log(data.data.id)
        })
    }, [])

    const styles = StyleSheet.create({

        hrLine: {
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            elevation: 5,
            width: "100%",
            marginHorizontal: 50,
            marginVertical: 20
        },

        container: {
            justifyContent: 'center',
            alignItems: "flex-start",
            backgroundColor: "white"
        },
        headerInfoContainer: {
            flex: 1,
            margin: 15,
            marginTop: 50
        },
        username: {
            fontWeight: "600",
            fontSize: 35
        },
        email: {
            alignSelf: "center",
            fontWeight: "400",
            color: "#AAAAAA",
            marginTop: 5
        },
        bodyInfoContainer: {
            flex: 2,
            textAlign: "center"
        }
    })


    return (
        <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
            <View style={styles.headerInfoContainer}>
                <Text style={styles.username}> {user.username} </Text>
                <Text style={styles.email}> {user.email} </Text>
            </View>

            <View style={styles.bodyInfoContainer}>
                <Text> {user.name} </Text>
                <Text> {user.phone} </Text>
                <Text> {user.website} </Text>
            </View>


        </SafeAreaView>
    )
}
