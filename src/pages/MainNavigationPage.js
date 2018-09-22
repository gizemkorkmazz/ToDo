import React,{Component} from "react";
import { createStackNavigator } from 'react-navigation';
import { FlatListExmPage } from "./FlatListExmPage";
const Roots=createStackNavigator(
    {
        flatList:{
            screen: FlatListExmPage,

        },


        
    },
    // {
    //     initialRouteName: 'flatList',

    // }
)
class MainNavigationPage extends Component{



    render(){
        return(
            <Roots></Roots>
        )
    }
}
export default MainNavigationPage;
