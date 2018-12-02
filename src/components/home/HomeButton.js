import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../helpers';
class HomeButton extends Component {
	render() {
		const { buttonContainerStyle,text,onClick } = this.props;
		return (
			<TouchableOpacity onPress={onClick} style={[ styles.container,buttonContainerStyle ]}
			
			>
				<Text style={styles.text}>{text}</Text>
			</TouchableOpacity>
		);
	}
}
export default HomeButton;

const styles = StyleSheet.create({
	container: {
		padding: widthPercentageToDP('5'),
		backgroundColor: 'black',
		width: widthPercentageToDP('40'),
		height:heightPercentageToDP("7")
	},
	text: {
		color: 'white',
		textAlign:"center"
	}
});