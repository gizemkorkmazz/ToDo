import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Page from '../components/common/Page';
import HomeButton from '../components/home/HomeButton';
import { LinearGradient } from 'expo';
import { heightPercentageToDP, widthPercentageToDP } from '../helpers';
class HomePage extends Component {
	render() {
		return (
			<Page>
				<LinearGradient colors={[ 'pink', 'orange', 'blue' ]} style={styles.container}>
					<View style={styles.buttonContainer}>
						<HomeButton
							text="Dummy Flatlist"
							onClick={() => {
								this.props.navigation.navigate('flatList');
							}}
						/>
						<HomeButton
							text="JSON Flatlist"
							buttonContainerStyle={{
								transform: [ { rotate: '90deg' } ]
							}}
							onClick={() => {
								this.props.navigation.navigate('flatListWJ');
							}}
						/>
					</View>
					<View style={styles.buttonContainer}>
						<HomeButton buttonContainerStyle={{ transform: [ { rotate: '-90deg' } ] }} text="Camera"  onClick={()=>{this.props.navigation.navigate("camera")}} />
						<HomeButton buttonContainerStyle={{ transform: [ { rotate: '180deg' } ] }} text="Karekod" onClick={()=>{this.props.navigation.navigate("qrCode")}}  />
					</View>
				</LinearGradient>
			</Page>
		);
	}
}
export default HomePage;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	buttonContainer: {
		borderRadius: 50,
		backgroundColor: 'pink',
		flexDirection: 'row',
		marginTop: heightPercentageToDP('6')
	}
});
