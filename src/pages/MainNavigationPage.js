import React,{Component} from "react";
import { createStackNavigator } from 'react-navigation';
import { FlatListExmPage } from "./FlatListExmPage";
import { FlatListWithJson } from "./FlatListWithJson";
const Roots=createStackNavigator(
    {
        flatList:{
            screen: FlatListExmPage,

        },
        flatListWJ:{
            screen:FlatListWithJson,
        }


        
    },
    {
        initialRouteName: 'flatListWJ',

    }
)
class MainNavigationPage extends Component{



    render(){
        return(
            <Roots></Roots>
        )
    }
}
export default MainNavigationPage;
