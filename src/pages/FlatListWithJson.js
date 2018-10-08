import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Button, Dialog, TextInput, TouchableRipple } from 'react-native-paper';
import _ from 'lodash';

// *TODO :
// Ekleye basınca 3 adet textinput çıkacak.Hepsi dolu ise diziye ekleyecek.Sonrada dizinin içindekine dokununca sil butonu çıkacak ve istenilen item silinebilecek.

const { width } = Dimensions.get('window');

class FlatListWithJson extends Component {
	state = {
		isShowListVisible: false,
		data: [],
		modalVisible: false,
		selectedItem: null
	};

	componentDidMount(){
	    this.fetchData();
	}

	fetchData=async ()=>{
	    const response= await fetch("http://www.json-generator.com/api/json/get/cfucMzOqtK?indent=2");
	    const json= await response.json();
	    this.setState({data:json.people});

	};

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
this.setState({selectedItem:item})
										
									 	this.refs.myScroll.scrollTo({ x: width, y: 0, animated: true })
										
										
									}}
									key={index}
								>
									                
                        <Text  style={{ marginTop: 10 }} >{item.phone}</Text>
                        <Text    >{item.age}</Text>
						<Text   >{item.name}</Text>

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
			phone: this.phone,
			age: this.age,
			name: this.name
		};
		let a = this.state.data;
		// a.push(newItem);
		a = [ ...a, newItem ]; // 3 nokta , a nın hepsini al demek.a=[...a,newItem] da a nın hepsini al, sonuna da newItem ı ekle bu da a adında yeni bir dizi olsun demek.
		this.setState({ data: a, modalVisible: true });
    }
    
	deleteItem() {
        console.log(this.state.selectedItem);
        //burada selected itemın indexini bulıp datadan silceksin.
    //    let index = this.state.data.indexOf(this.state.selectedItem);
    //    this.state.data.slice(index, 1);
    //    var data = [...this.state.data]
    //    this.setState({ data:data });
   


       


		// this.setState({ selectedItem: this.state.data.slice() });
	// 	let newData=data.map(selectedItem=>(
	// 		!this.state.selectedItem? {...selectedItem, key: value}: selectedItem
	//   ))
	

    }
		

	deleteFullList() {
		this.setState({ data: this.state.data.splice() });
	}
	itemDetail() {
console.log(this.state.selectedItem)

		if (!this.state.selectedItem) {
			return <View />;
		}
		return (
			<View>
				<Text>{this.state.selectedItem.phone}</Text>
				<Text>{this.state.selectedItem.age}</Text>
				<Text>{this.state.selectedItem.name}</Text>

				<Button
					raised
					onPress={() => {
                        this.setState({ modalVisible: true });
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


	render() {
		(this.phone = ''), (this.age = ''), (this.name = '');
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
							placeholder="Telefon"
							value={this.phone}
							onChangeText={(text) => (this.phone = text)}
						/>
						<TextInput
							placeholder="Yaş"
							value={this.age}
							onChangeText={(text) => (this.age = text)}
						/>
						<TextInput placeholder="İsim" value={this.name} onChangeText={(text) => (this.name = text)} />
						<Button
							raised
							onPress={() => {
								console.log(this.phone, this.age, this.name);
								if (!this.phone || !this.age || !this.name) {
								
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
                    <Dialog visible={this.state.modalVisible} onDismiss={() => this.setState({ modalVisible: false })}>
				<TextInput
					placeholder="jfbkm"
					value={this.phone}
					onChangeText={(text) => (this.phone = text)}
				/>
				{/* <TextInput
					placeholder={this.state.selectedItem.age}
					value={this.age}
					onChangeText={(text) => (this.age = text)}
				/>
				<TextInput
					placeholder={this.state.selectedItem.name}
					value={this.name}
					onChangeText={(text) => (this.name = text)}
				/> */}
				<Button
					raised
					onPress={() => {
						this.setState({
							modalVisible: false,
							data: this.state.data.splice(1, 1, {
								phone: this.phone,
								age: this.age,
								name: this.name
							})
						});
					}}
				>
					Düzenle
				</Button>
			</Dialog>
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
export { FlatListWithJson };

// array.shift() // Dizinin ilk elemanını çıkartır.
// array.unshift(0) // Diziye bir eleman ekler. (En başa)
// // delete array[1] // Dizinin 1. anahtarlı elemanını çıkartır.
// array.splice(2, 5) // Dizinin 2. elemanıyla 5. elemanı arasında kalan kısmını ayırır.
// array.concat([8, 9, 10]) // Diziyi başka bir dizi ile birleştirir.
// array.concat([11, 12, 13], [14, 15, 16]) // 3 diziyi birleştirir.
// array.slice(0) // Dizinin verilen anahtarlı değerini diziden ayırır
