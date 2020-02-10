import React from 'react'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {View, Text, StyleSheet} from 'react-native'
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {Card} from "react-native-elements";
import {THEME} from "../theme";

export const MainScreen = () => {
	return (
		<View>
			<Card title="Расходы" titleStyle={styles.title}>
				<Text style={{marginBottom: 10}}>
					The idea with React Native Elements is more about component structure than actual design.
				</Text>
			</Card>
			<Card title="Доходы" titleStyle={styles.title}>
				<Text style={{marginBottom: 10}}>
					The idea with React Native Elements is more about component structure than actual design.
				</Text>
			</Card>
		</View>
	)
}

MainScreen.options = ({navigation}) => ({
	headerTitle: 'Журнал расходов',
	headerLeft: () => {
		return <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
			<Item title='Меню' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
		</HeaderButtons>
	}
})

const styles = StyleSheet.create({
	title: {
		backgroundColor: THEME.MAIN_COLOR,
		padding: 10,
		color: '#fff'
	}
});