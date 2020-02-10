import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {IncomeScreen} from "./IncomeScreen";

export const ConsumptionScreen = () => {
	return <View style={styles.wrapper}>
		<Text>ConsumptionScreen</Text>
	</View>
};

ConsumptionScreen.options = ({navigation}) => ({
	headerTitle: 'Расходы',
	headerLeft: () => {
		return <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
			<Item title='Меню' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
		</HeaderButtons>
	}
});

const styles = StyleSheet.create({
	wrapper:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});