import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import { Icons, widthPercentageToDP, heightPercentageToDP } from '../../helpers';
import { withNavigation } from 'react-navigation';
class Page extends Component {
	onHamburgerClick = navigation => {
		navigation.openDrawer();
	};
	render() {
		const { children, pageStyle } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.toolBar}>
					<TouchableWithoutFeedback
						onPress={() => {
							this.onHamburgerClick(this.props.navigation);
						}}
					>
						<Image source={Icons.HamburgerIcon} style={styles.hamburgerIcon} />
					</TouchableWithoutFeedback>
				</View>
				<View style={[styles.pageStyle, pageStyle]}>{children}</View>
			</View>
		);
	}
}
export default withNavigation(Page);

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	hamburgerIcon: {
		width: widthPercentageToDP('6'),
		height: widthPercentageToDP('6'),
		resizeMode: 'contain'
	},
	pageStyle: {
		flex: 1
	},
	toolBar: {
		paddingTop: heightPercentageToDP('5'),
		paddingLeft: widthPercentageToDP('2')
	}
});
