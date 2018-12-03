import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Page from '../components/common/Page';
import { Camera ,Permissions} from 'expo';
import { TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP, heightPercentageToDP } from '../helpers';
class CameraPage extends Component {
	state={
		type:Camera.Constants.Type.back,
		onCameraReady:false,
		preparingPhoto:false,
		hasCameraPermission:null

	}
// componentDidMount(){
// 	try{
// 		Permissions.askAsync(Permissions.CAMERA)
// 		.then((status)=>{
// 			this.setState({hasCameraPermission:status==="granted"})

// 		})
// 		.catch((error)=>{
// 			this.setState({hasCameraPermission:false})
// 		})
// 	}
// 	catch(error){
// 		this.setState({hasCameraPermission:false})
// 	}
	
// }

	render() {
		return (
			<Page>
					<Camera ref={(ref) => (this.camera = ref)} style={styles.camera}  >
						<TouchableRipple onPress={() => {}} >
							<View style={styles.takePhoto}>
								<Text style={styles.text} >ÇEK</Text>
							</View>
						</TouchableRipple>
					</Camera>
			</Page>
		);
	}
}
export default CameraPage;

const styles = StyleSheet.create({
	camera: {
		flex: 1,
		justifyContent:"flex-end"
	},
	takePhoto: {
		backgroundColor: 'white',
		borderRadius: 50,
		alignSelf: 'center',
		justifyContent:"center",
		width:widthPercentageToDP("20"),
		height:widthPercentageToDP("20"),
		marginBottom:heightPercentageToDP("10")
	},
	text:{
		textAlign:"center"
	}
});
