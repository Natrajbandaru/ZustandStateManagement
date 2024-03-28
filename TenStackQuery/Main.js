import React from "react";
//https://jsonplaceholder.typicode.com/todos
import { useQuery } from "@tanstack/react-query";
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

//https://jsonplaceholder.typicode.com/posts

const MainData=()=>{
    const { data ,error,isLoading}=useQuery({
        queryKey:["todo"],
        queryFn : () =>
                fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>
                     res.json()
                ),
    });

    if(error) return <Text style={{BackGroundColor:"black"}}>There was a error</Text>

    if(isLoading) return <Text style={{BackGroundColor:"black"}}>There was a Loading..</Text>
    return(
        <ScrollView style={{BackGroundColor:"black"}}>
            <Text style={{BackGroundColor:"black"}}>Hello</Text>

            <FlatList
                    data={data}
                    renderItem={({ item }) => (
                    <View style={{ padding: 10,flexDirection:"row" , justifyContent:"space-between"}}>
                        <Text style={{BackGroundColor:"black"}}>{item.id}</Text>
                        <Text style={{BackGroundColor:"black"}}>{item.title}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />

          
        </ScrollView>
    )
}

export default MainData;