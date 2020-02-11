import React from 'react'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {CardRashodi} from "../components/CardRashodi";

export const MainScreen = ({navigation}) => {
	return (
		<>
			<CardRashodi titleCard="Расходы" navigation={navigation} goToScreen="CreateConsumption"/>
			<CardRashodi titleCard="Доходы" navigation={navigation} goToScreen="CreateIncome"/>
		</>
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