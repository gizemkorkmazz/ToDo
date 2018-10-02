import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Button, Dialog, TextInput, TouchableRipple } from 'react-native-paper';
import { DummyData } from '../components/flatListExmPage/DummyData';
import _ from 'lodash';

// *TODO :
// Ekleye basınca 3 adet textinput çıkacak.Hepsi dolu ise diziye ekleyecek.Sonrada dizinin içindekine dokununca sil butonu çıkacak ve istenilen item silinebilecek.
data = [
	{
		firstName: 'Ayşe',
		lastName: 'Kaya',
		phone: '05556376378'
	},
	{
		firstName: 'Gaye',
		lastName: 'Akbaba',
		phone: '05559206378'
	},
	{
		firstName: 'Mehmet',
		lastName: 'Açar',
		phone: '05413568790'
	}
];
const { width } = Dimensions.get('window');

class FlatListExmPage extends Component {
	state = {
		isShowListVisible: false,
		data: data,
		modalVisible: false,
		selectedItem: null
	};

	// componentDidMount(){
	//     this.fetchData();
	// }

	// fetchData=async ()=>{
	//     const response= await fetch("http://www.json-generator.com/api/json/get/bUnhveDRVe?indent=2");
	//     const json= await response.json();
	//     this.setState({data:json.indent});

	// };
	componentDidMount() {
		// data.forEach(()=>{
		// 	this.setState({index:this.state.index +1})
		// })
	}
	renderFlatList() {
		if (this.state.isShowListVisible === true) {
			return (
				<View>
					<FlatList
						data={this.state.data}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({ item, index }) => {
							return (
								<TouchableOpacity
									onPress={() => {
											this.setState({ selectedItem: item }),
									 	this.refs.myScroll.scrollTo({ x: width, y: 0, animated: true })
										// if(!this.state.selectedItem){
										// 	return (this.setState({ selectedItem: item }))

										// }
										// return (
										// 	this.setState({ selectedItem: this.state.selectedItem }),
										// 	this.refs.myScroll.scrollTo({ x: width, y: 0, animated: true })
								
										// )	
										
									}}
									key={index}
								>
									{/*                 
                        <Text   >{item.people.phone}</Text>
                        <Text    >{item.people.age}</Text>
						<Text   >{item.people.name}</Text> */}

									<Text style={{ marginTop: 10 }}>{item.firstName}</Text>
									<Text>{item.lastName}</Text>
									<Text>{item.phone}</Text>
								</TouchableOpacity>
							);
						}}
					/>
					<Button raised onPress={() => this.deleteFullList()}>
						Tümünü Sil
					</Button>
					<Button raised onPress={() => this.addNewItem()}>
						Ekle
					</Button>
				</View>
			);
		}
		return <View />;
	}
	addNewItem() {
		var newItem = {
			firstName: this.firstName,
			lastName: this.lastName,
			phone: this.phone
		};
		let a = this.state.data;
		// a.push(newItem);
		a = [ ...a, newItem ]; // 3 nokta , a nın hepsini al demek.a=[...a,newItem] da a nın hepsini al, sonuna da newItem ı ekle bu da a adında yeni bir dizi olsun demek.
		this.setState({ data: a, modalVisible: true });
	}
	deleteItem() {
		this.setState({ selectedItem: this.state.data.splice() });
	}
	deleteFullList() {
		this.setState({ data: this.state.data.splice() });
	}
	itemDetail() {
		if (!this.state.selectedItem) {
			return <View />;
		}
		return (
			<View>
				<Text>{this.state.selectedItem.firstName}</Text>
				<Text>{this.state.selectedItem.lastName}</Text>
				<Text>{this.state.selectedItem.phone}</Text>

				<Button
					raised
					onPress={() => {
						this.editItem(), this.setState({ modalVisible: true });
					}}
				>
					Düzenle
				</Button>
				<Button raised onPress={() => this.deleteItem()}>
					Listeden Sil
				</Button>
				<Button
					raised
					onPress={() => {
						this.refs.myScroll.scrollTo({ x: 0, y: 0, animated: true });
					}}
				>
					Geri Dön
				</Button>
			</View>
		);
	}

	editItem() {
		if (!this.state.selectedItem) {
			return <View />;
		}
		return (
			<Dialog visible={this.state.modalVisible} onDismiss={() => this.setState({ modalVisible: false })}>
				<TextInput
					placeholder={this.state.selectedItem.firstName}
					value={this.firstName}
					onChangeText={(text) => (this.firstName = text)}
				/>
				<TextInput
					placeholder={this.state.selectedItem.lastName}
					value={this.lastName}
					onChangeText={(text) => (this.lastName = text)}
				/>
				<TextInput
					placeholder={this.state.selectedItem.phone}
					value={this.phone}
					onChangeText={(text) => (this.phone = text)}
				/>
				<Button
					raised
					onPress={() => {
						this.setState({
							modalVisible: false,
							data: this.state.data.splice(1, 1, {
								firstName: this.firstName,
								lastName: this.lastName,
								phone: this.phone
							})
						});
					}}
				>
					Düzenle
				</Button>
			</Dialog>
		);
	}
	render() {
		(this.firstName = ''), (this.lastName = ''), (this.phone = '');
		console.log(this.state.data);
		return (
			<ScrollView style={styles.container} horizontal={true} ref="myScroll" scrollEnabled={false}>
				<View style={{ width: width }}>
					<Button
						raised
						onPress={() => {
							this.setState({ isShowListVisible: !this.state.isShowListVisible });
						}}
					>
						Listele
					</Button>
					{this.renderFlatList()}
					<Dialog visible={this.state.modalVisible} onDismiss={() => this.setState({ modalVisible: false })}>
						<TextInput
							placeholder="İsim"
							value={this.firstName}
							onChangeText={(text) => (this.firstName = text)}
						/>
						<TextInput
							placeholder="Soyisim"
							value={this.lastName}
							onChangeText={(text) => (this.lastName = text)}
						/>
						<TextInput placeholder="No" value={this.phone} onChangeText={(text) => (this.phone = text)} />
						<Button
							raised
							onPress={() => {
								console.log(this.firstName, this.lastName, this.phone);
								if (!this.firstName || !this.lastName || !this.phone) {
									// return (
									// 	<Text style={{ color: 'pink', fontSize: 20 }}>
									// 		Lütfen tüm alanları doldurunuz
									// 	</Text>
									// );
									Alert.alert(null, 'Lütfen tüm alanları doldurunuz!', [ { text: 'Tamam' } ]);
									return;
								}
								this.addNewItem(), this.setState({ modalVisible: false });
							}}
						>
							Yeni Üye Ekle
						</Button>
					</Dialog>
				</View>
				<View style={{ width: width }}>
					{this.itemDetail()}
					{this.editItem()}
				</View>
			</ScrollView>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		marginTop: 20
	}
});
export { FlatListExmPage };

// array.shift() // Dizinin ilk elemanını çıkartır.
// array.unshift(0) // Diziye bir eleman ekler. (En başa)
// // delete array[1] // Dizinin 1. anahtarlı elemanını çıkartır.
// array.splice(2, 5) // Dizinin 2. elemanıyla 5. elemanı arasında kalan kısmını ayırır.
// array.concat([8, 9, 10]) // Diziyi başka bir dizi ile birleştirir.
// array.concat([11, 12, 13], [14, 15, 16]) // 3 diziyi birleştirir.
// array.slice(0) // Dizinin verilen anahtarlı değerini diziden ayırır
