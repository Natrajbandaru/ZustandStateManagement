import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CourseForm from './Components/courseForm';
import Arrow from './Example2/ArrowFunctions';
import PostData from './TenStackQuery/PostData';

import { QueryClient,QueryClientProvider} from '@tanstack/react-query'
const queryClient=new QueryClient({
  defaultOptions:{queries:{staleTime:3000 ,gcTime:1000*(60*1000)}}  
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        {/* <CourseForm/> */}
        <PostData/>
      </View>
    </QueryClientProvider>
  );
}


const styles = StyleSheet.create({
  container:{
       flex:1,
       margin:10,
       justifyContent:"center",
       alignItems:"center"
  },
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  formInput: {
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgb(247, 247, 247)',
    width: 288,
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



