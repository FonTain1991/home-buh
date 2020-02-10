import React from 'react'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {View, Text, StyleSheet} from 'react-native'
import {AppHeaderIcon} from "../components/AppHeaderIcon";

export const AboutScreen = () => {
	return <View style={styles.center}>
		<Text>Это лучшее приложение для личных заметок</Text>
		<Text>Версия приложения <Text style={styles.version}>1.0.0.</Text></Text>
	</View>
}

AboutScreen.options = ({navigation}) => ({
	headerTitle: 'О приложении',
	headerLeft: () => {
		return <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
			<Item title='Меню' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
		</HeaderButtons>
	}
})

const styles = StyleSheet.create({
	wrapper:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	version: {
		fontFamily: 'roboto-bold'
	}
});