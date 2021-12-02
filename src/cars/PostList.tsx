import React, {useEffect, useState} from 'react';
import {
    Button,
    FlatList,
    SafeAreaView,
    StatusBar,
    Text,
    TouchableHighlightComponent, TouchableNativeFeedbackComponent,
    TouchableOpacity,
    View
} from "react-native";
import { StyleSheet} from 'react-native';
import {getCars, ProxyApiService} from "../../services/ProxyApiService";
import {Post} from "../../Models/models";
import axios, {AxiosResponse} from "axios";
import * as url from "url";
import { TouchableNativeFeedback } from 'react-native';

// @ts-ignore
export function CarList({ navigation }) {
    let [postList, setPostList] = useState<Post[]>([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((data: AxiosResponse) => {
            setPostList(postList = data.data)
            console.log( postList );
        }).catch((e)=> {
            console.log(e);
        })
    }, [])

    // @ts-ignore
    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate('Car Detail', {id: item.id})}>
            <Text style={styles.titles}>{item.title}</Text>
            <Text> {item.body} </Text>
            {/*<Button title={'GET DETAIL'} onPress={()=> navigation.navigate('Car Detail', {id: item.id})} />*/}
        </TouchableOpacity>
    );



    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={postList}
                renderItem={renderItem}
                keyExtractor={post => post.id.toString()}
            />
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        margin: 15
    },
    item: {
        marginBottom: 20,
        borderRadius: 5,
        padding: 20,
        backgroundColor: "white",
        elevation: 5,
        shadowOffset: {width: 8,height: 8},
        shadowOpacity: 0.05,
        shadowRadius: 5,
        shadowColor: "black",
        margin: 20
    },
    titles: {
        fontWeight: "700",
        marginBottom: 10
    }
});
