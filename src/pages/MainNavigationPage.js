import React, { Component } from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { FlatListExmPage } from './FlatListExmPage';
import { FlatListWithJson } from './FlatListWithJson';
import HomePage from './HomePage';
import CameraPage from './CameraPage';
import QrCodePage from './QrCodePage';
const Roots = createDrawerNavigator(
	{
		home: {
			screen: HomePage,
			navigationOptions: {
				drawerLabel: 'Home'
			}
		},
		flatList: {
			screen: FlatListExmPage,
			navigationOptions: {
				drawerLabel: 'Dummy Flatlist'
			}
		},
		flatListWJ: {
			screen: FlatListWithJson,
			navigationOptions: {
				drawerLabel: 'Json Flatlist '
			}
		},
		camera: {
			screen: CameraPage,
			navigationOptions: {
				drawerLabel: 'Kamera '
			}
		},
		qrCode: {
			screen: QrCodePage,
			navigationOptions: {
				drawerLabel: 'Karekod '
			}
		}
	},
	{
		initialRouteName: 'home'
	}
);
class MainNavigationPage extends Component {
	render() {
		return <Roots />;
	}
}
export default MainNavigationPage;
