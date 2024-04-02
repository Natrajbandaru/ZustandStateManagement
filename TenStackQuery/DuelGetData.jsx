
import React from "react";
import { useQuery ,useMutation, useQueryClient} from "@tanstack/react-query";
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

//https://jsonplaceholder.typicode.com/posts

const DuelGetData=()=>{
    const queryClient = useQueryClient();
    const {data}=useQuery({
        queryKey:["posts"],
        queryFn : () =>
                fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>
                     res.json()
                ),
        staleTime:2000,
        refetchInterval:3000
    });

    const id=data.id;
    
    const { error,isLoading,aa}=useQuery({
        queryKey:["posts"],
        queryFn : () =>
                fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>
                     res.json()
                ),
        staleTime:2000,
        refetchInterval:3000,
        enabled:!!id
    });
    

    const {mutate,isPending,isError,isSuccess}=useMutation({
        mutationFn:(newPost)=>
                   fetch("https://jsonplaceholder.typicode.com/posts",{
                   method:"POST",
                   body:JSON.stringify(newPost),
                   headers:{"Content-type":"application/json; charset=UTF-8"}
                   }).then((res)=>res.json()),
        // onSuccess:(newPost)=>{
                //adding olddata and new data with out going backend

        //     queryClient.setQueriesData(["posts"],(oldPosts)=>[...oldPosts,newPost])
        // }
         onSuccess:()=>{
            //calling get based on key
            queryClient.invalidateQueries({queryKey:["posts"]})
        }
    })
    if(error) return <Text style={{BackGroundColor:"black"}}>There was a error</Text>
    if(isLoading) return <Text style={{BackGroundColor:"black"}}>There was a Loading..</Text>
   
    if(isError) return <Text style={{BackGroundColor:"black"}}>There was a error</Text>
    if(isPending) return <Text style={{BackGroundColor:"black"}}>Post Loading..</Text>
    // if(isSuccess){
    //     aa
    // }


    return(
        <ScrollView style={{BackGroundColor:"black"}}>
            <Button onPress={()=>mutate( {
               userId: 9000,
                id: 4000,
                title: "Natraj",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            })}  title="Button">Button</Button>
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

export default DuelGetData;