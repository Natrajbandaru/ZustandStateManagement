import React from "react";
import { View ,Text} from "react-native";

const MainData=()=>{
    
    //1) Vareabels
        let sales =10;
        let salesLarge :number=1_50_000;
        let course :string="Natraj"
        let booleanValue :boolean=true;
    
        let anythingwecan;

    //2) Any
        let anything;

        anything=1;
        anything="num";

        function rendertype(document :number){
            console.log(document);
        }

    //3)Arrays
         // In javaScript it well work due to it can pass anything in typescript we need to declare it
         var arr=["ss","sd",22];

         var art :number[] = [1,2,3];

         var stringarr :string[] = ["kal","pop"];
          
         var anyarray = ["oo",12]

         let numbers :any=[];
         numbers[0]=1;
         numbers[1]=4;


    //4)Tuples  :
        // Tuples are use in typescript to declare a differnt vareabels in string

        let user: [number, string,boolean,number]=[1,'Mosh',true,0];

        user.push(0);

        console.log(user);

    // 5)Enums  :  
       //Enums are used for a random Numbers and declare  a number of constants in a one
       //Note:  If integer pass 1 it well auto increment

          const small = 1;
          const medium = 2;
          const large = 3;

          //For integer
          enum Size {Small=0 ,Medium, Large}

          enum Sizedata {SmallString="ss" ,MediumString="m", LargeString="l"}

          let mysize :Size = Size.Large;

          console.log(mysize)

    //6)Functions :
            
        function calculation(na :number){
                 
            return na;
        }

                
        function calculation2(na :number) :string{
                 
            return "";
        }

        function calculation3(na :number) :any{
                 
            return 45;
        }

        function calculation4(na :number, num? :string) :any{
              let s;   
            return 45;
        }

        function calculation5(na=22 , num? :string) :any{
            let s;   
          return 45;
      }

        calculation4(2);
    
    //7) Objects
        
  //  readonly : is used for only read not modefy the variabel of object
       
        let employe:{
           readonly id: number,
            name: string,
            retire :(date :Date)=>void
        } = {id : 1, name : "sss",
             retire:(date :Date)=>{
                console.log(date);
             }
    
         }

    // 7a) TypeAreas:  type
          // TypeAleas is declared as type
          
         type  Employe = {
            readonly id: number,
            name: string,
            retire :(date :Date)=>void
         }

         let emp :Employe ={
            id : 1, name : "sss",
             retire:(date :Date)=>{
                console.log(date);
             }

         }

     //7b) Narrowing: typeof

        function kgTons( weight :number | string) :number{

            if(typeof weight === "number"){
                return weight *2.2;
            }
            else{
               return parseInt (weight);
            }

        }
    
        

    






    return(
        <View>
             <Text>ddd</Text>   
        </View>
    )
}

export default MainData;