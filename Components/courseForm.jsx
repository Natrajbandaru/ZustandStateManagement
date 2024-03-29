import React, { useState } from "react";
import { Button, StyleSheet, TextInput,View } from "react-native";
import useCourseStore from "../app/courseStore";
import CourseList from "./courseList";
const CourseForm = () =>{
    const addCourse = useCourseStore((state)=>state.addCourse)
    const [courseTitle, setCourseTitle]=useState("");
    console.log("Course  Rendering")

    const  handelCourseSubmit =()=>{
        if(!courseTitle) return ("Pleace add a course Title")
        addCourse({
          id:Math.ceil(Math.random()*1000000),
          title:courseTitle
        })
        setCourseTitle("");
    }
    return(
        <View style={styles.formContainer}>
              <TextInput style={styles.formInput} value={courseTitle}
               onChangeText={(e)=>{
                setCourseTitle(e)
               }}
               placeholder="Enter Data...."
               >
              </TextInput>
              <Button style={styles.formSubmitBtn} title="Add Course"
               onPress={()=>{
                handelCourseSubmit();
               }}/>

               <CourseList></CourseList>
        </View>
    )
}



const styles = StyleSheet.create({
    ul: {
      padding: 0,
    },
    mainContainer: {
      padding: 16,
      height: '100%',
      backgroundColor: '#1e1e1e',
      color: '#fff',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    formContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      flex:1,
      justifyContent:"space-around"
    },
    formInput: {
      padding: 12,
      borderWidth: 1,
      borderColor: 'rgb(247, 247, 247)',
      width: 288,
      elevation:3
    },
    formSubmitBtn: {
      backgroundColor: '#666',
      padding: 12,
      borderWidth: 1,
      borderColor: '#666',
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    courseItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 320,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 10,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: 'white',
      marginVertical: 16,
      padding: 16,
      fontWeight: 'bold',
    },
    courseItemCol1: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginHorizontal: 5,
    },
    deleteBtn: {
      padding: 8,
      color: 'white',
      backgroundColor: '#ff0000cc',
      borderRadius: 5,
      borderWidth: 0,
      marginHorizontal: 5,
    },
  });
  
  
  
  

export default CourseForm;


