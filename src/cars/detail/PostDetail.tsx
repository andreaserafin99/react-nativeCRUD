import React, {useEffect, useRef, useState} from 'react';
import {Animated, Button, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {Post, User} from "../../../Models/models";
import axios, {AxiosResponse} from "axios";

// @ts-ignore
export function CarDetail({route, navigation }) {
    const {id} = route.params;
    let [translation, setTranslation] = useState(-30);
    let [translation2, setTranslation2] = useState(-30);
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: "flex-start",
            backgroundColor: "white",
            borderRadius: 5,
            elevation: 5,
            shadowOffset: {width: 8, height: 8},
            shadowOpacity: 0.20,
            shadowRadius: 4,
            shadowColor: "black",
            margin: 40
        },
        userContainer: {
            margin: 20,
            transform: [{translateX: translation}],
        },
        postContainer: {
            margin: 20,
            transform: [{translateX: translation2}],
        },
        username: {
            fontSize: 32,
            fontWeight: "600"
        },
        email: {
            fontSize: 24,
            color: "#ababab"
        },
        title: {
            fontSize: 18,
            fontWeight: "500",
            marginBottom: 20
        },
        body: {}
    })

    let [post, setPost] = useState<Post>();
    let [user, setUser] = useState<User>();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then((data: AxiosResponse) => {
            setTimeout(() => {
                axios.get('https://jsonplaceholder.typicode.com/users/' + data.data?.userId).then((response: AxiosResponse) => {
                    for (let i = -30; i < 0; i++) {
                        setTimeout(() => {
                            setTranslation(i);
                        }, 15 * i);
                    }
                    setUser(user = response.data);
                    console.log(user);
                    setTimeout(() => {
                        for (let i = -30; i < 0; i++) {
                            setTimeout(() => {
                                setTranslation2(i);
                            }, 15 * i);
                        }
                        setPost(post = data.data)
                        console.log(post);
                    }, 1500)
                })
            }, 1500)
        }).catch((e) => {
            console.log(e);
        })
    }, [])

    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
            <View style={styles.container}>
                <View style={styles.userContainer}>
                    <Text style={styles.username}> {user?.username} </Text>
                    <Text style={styles.email}> {user?.email} </Text>
                </View>
                <View style={styles.postContainer}>
                    <Text style={styles.title}> {post?.title} </Text>
                    <Text> {post?.body} </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
