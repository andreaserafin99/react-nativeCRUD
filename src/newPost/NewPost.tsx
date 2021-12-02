import React, {useEffect, useRef, useState} from 'react';
import {Animated, Button, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import axios, {AxiosResponse} from "axios";
import {Post} from "../../Models/models";

// @ts-ignore
export function NewPost({ navigation }) {

    let [title, onChangeTitle] = useState<string>('');
    let [body, onChangeBody] = useState<string>('');

    const styles = StyleSheet.create({
        container: {
            height: "50%",
            justifyContent: 'space-evenly',
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 5,
            elevation: 5,
            shadowOffset: {width: 8, height: 8},
            shadowOpacity: 0.20,
            shadowRadius: 4,
            shadowColor: "black",
            margin: 40
        },
        input: {
            width: 220,
            marginTop: 10,
            borderBottomWidth: 2,
            borderBottomColor: "#EBEBEB",
        }
    })


    function createPost() {
        let currentPost: Post;
        currentPost = {
            "userId": Math.random(),
            "title": title,
            "body": body
        }
        axios.post('https://jsonplaceholder.typicode.com/posts')
    }

    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
            <View style={styles.container}>
                <View>
                    <Text>
                        Title
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeTitle}
                        value={title}
                        placeholder="Title"
                    />
                </View>
                <View>


                    <Text>
                        Body
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeBody}
                        value={body}
                        placeholder="Body"
                    />
                </View>

                <Button title={'Create Post'} onPress={()=> createPost() } />
            </View>
        </SafeAreaView>
    )
}
