import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP } from '../../helpers';

class Outline extends Component {
	render() {
		return (
			<TouchableOpacity onPress={() => {}} style={styles.container}>
				<Text style={styles.text}>Dummy Flatlist</Text>
			</TouchableOpacity>
		);
	}
}
export default Outline;

const styles = StyleSheet.create({
	container: {
		padding: widthPercentageToDP('5'),
		backgroundColor: 'black',
		width: widthPercentageToDP('40')
	},
	text: {
		color: 'white'
	}
});
