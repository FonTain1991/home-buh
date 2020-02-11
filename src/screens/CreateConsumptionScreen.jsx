import React from 'react'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {StyleSheet, Text} from 'react-native'

import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {THEME} from "../theme";

export const CreateConsumptionScreen = () => {
	return (
		<Text>CreateConsumptionScreen</Text>
	)
}

CreateConsumptionScreen.options = ({navigation}) => ({
	headerTitle: 'Добавление расходов',
	headerLeft: () => {
		return <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
			<Item title='Назад' iconName='md-arrow-back' onPress={() => navigation.goBack()}/>
		</HeaderButtons>
	}
})

const styles = StyleSheet.create({
	title: {
		backgroundColor: THEME.MAIN_COLOR,
		padding: 10,
		color: '#fff'
	},
	cardWrapper: {
		backgroundColor: '#fff',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	cardView: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
});