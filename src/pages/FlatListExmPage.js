import React, { Component } from 'react';
import { View, Text ,StyleSheet,FlatList} from 'react-native';
import { DummyData } from '../components/flatListExmPage/DummyData';
import {Button} from "react-native-paper";
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
},
{
    firstName:"Saygı",
    lastName:"Değer",
    phone:"05356784352"
}
    
];


class FlatListExmPage extends Component{
state={
    isShowListVisible:false
};

    renderFlatList(){
        if(this.state.isShowListVisible===true){
            return(
                <View style={styles.list} >

                <FlatList   
                data={data}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item,index})=>{
                    return (
                        <View key={index} style={styles.container} >
                
                        <Text   >{item.firstName}</Text>
                        <Text    >{item.lastName}</Text>
                        <Text   >{item.phone}</Text>
                        </View>
                
                
                    )
                }}
                
                
                >
                
                </FlatList>
                </View>
                    )
        }
        return <View></View>
 
    
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
        flex:0.5,
        justifyContent:"center",
        alignItems:"center"
    },
    list:{
    }
})
export {FlatListExmPage};