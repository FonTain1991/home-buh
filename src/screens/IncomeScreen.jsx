import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {useSelector} from "react-redux";


export const IncomeScreen = () => {

	const income = useSelector(state => console.log(state.income))

	return <View style={styles.wrapper}>
		<Text>{IncomeScreen}</Text>
	</View>
};

IncomeScreen.options = ({navigation}) => ({
	headerTitle: 'Доходы',
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