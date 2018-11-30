import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Page from '../components/common/Page';
import HomeButton from '../components/home/HomeButton';
import { LinearGradient } from 'expo';
class HomePage extends Component {
	render() {
		return (
			<Page>
				<LinearGradient colors={['pink', 'orange', 'blue']} style={styles.container}>
					<View style={styles.buttonContainer}>
						<ScrollView>
							<HomeButton />
							<HomeButton />
							<HomeButton />
						</ScrollView>
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
		justifyContent: 'center',
		alignItems: 'center'
	}
});
