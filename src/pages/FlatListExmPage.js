import React, { Component } from 'react';
import { View, Text ,StyleSheet,FlatList} from 'react-native';
import {Button} from "react-native-paper";
import { DummyData } from '../components/flatListExmPage/DummyData';

 data=[
    {
        firstName:"Ayşe",
        lastName:"Kaya",
        phone:"05556376378"


    },
    {
    firstName:"Gaye",
    lastName:"Akbaba",
    phone:"05559206378"


},
{
    firstName:"Mehmet",
    lastName:"Açar",
    phone:"05413568790"
}
    
];


class FlatListExmPage extends Component{
state={
    isShowListVisible:false,
    data:data
};
// componentDidMount(){
//     this.fetchData();
// }

// fetchData=async ()=>{
//     const response= await fetch("http://www.json-generator.com/api/json/get/bUnhveDRVe?indent=2");
//     const json= await response.json();
//     this.setState({data:json.indent});
    
// };

    renderFlatList(){
        if(this.state.isShowListVisible===true){
            return(
                <View style={styles.list} >

                <FlatList   
                // data={this.state.data}
                data={this.state.data}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item,index})=>{
                    return (
                        <View key={index}  >
{/*                 
                        <Text   >{item.people.phone}</Text>
                        <Text    >{item.people.age}</Text>
                        <Text   >{item.people.name}</Text> */}
                           <Text   >{item.firstName}</Text>
                        <Text    >{item.lastName}</Text>
                        <Text   >{item.phone}</Text> 
                        
                        </View>


                
                
                    )
                }}
    
                
                >
                
                </FlatList>
                <Button raised onPress={()=>this.deleteItem() }>Sil</Button>
            <Button raised onPress={()=>this.addNewItem()}>Ekle</Button>


                </View>
                    )
        }
        return <View></View>
 
    
    };
addNewItem(){
    var newItem={
        firstName:"Görgü",
        lastName:"Nadir",
        phone:"05413568790"
    }
     this.setState({ data: this.state.data.push(newItem) }) ;
};

    deleteItem(){
        this.setState({ data: this.state.data.splice() }) ;
    };
    render(){
        return(
            <View style={styles.container} >
            <Button raised onPress={()=>{this.setState({isShowListVisible:!this.state.isShowListVisible});}  }>Listele</Button>
{this.renderFlatList()}



            </View>
            
        )
    }
}
const styles=StyleSheet.create({
    container:{
        marginTop:20,
       
    },
    list:{
    }
})
export {FlatListExmPage};