import React, {useEffect} from 'react'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {CardRashodi} from "../components/CardRashodi";
import {useDispatch, useSelector} from "react-redux";
import {loadIncome} from "../store/actions/income";
import {ActivityIndicator, ScrollView, View, StyleSheet, Text} from "react-native";
import moment from "moment";
import {THEME} from "../theme";
import {loadСonsumption} from "../store/actions/consumption";

export const MainScreen = ({navigation}) => {
	const dispatch = useDispatch();

	/* Загрузка доходов из базы */
	useEffect(() => {
		dispatch(loadIncome());
		dispatch(loadСonsumption());
	}, [dispatch]);

	const consumption = useSelector(state => state.consumption.consumption);
	const income = useSelector(state => state.income.income);

	const loading = useSelector(state => state.income.loading);

	if (loading){
		return <View style={styles.center}>
			<ActivityIndicator color={THEME.MAIN_COLOR} size='large'/>
		</View>
	}

	/* Вычисление расходов за неделю */
	let dayСonsumption = 0;
	for (let item of consumption.filter(item => selectDate('day', item.date))) {
		dayСonsumption += item.summa * 1
	}

	/* Вычисление расходов за неделю */
	let weekСonsumption = 0;
	for (let item of consumption.filter(item => selectDate('week', item.date))) {
		weekСonsumption += item.summa * 1
	}

	/* Вычисление расходов за месяц */
	let monthСonsumption = 0;
	for (let item of consumption.filter(item => selectDate('month', item.date))) {
		monthСonsumption += item.summa * 1
	}

	/* Вычисление доходов за неделю */
	let weekIncome = 0;
	for (let item of income.filter(item => selectDate('week', item.date))) {
		weekIncome += item.summa * 1
	}

	/* Вычисление доходов за месяц */
	let monthIncome = 0;
	for (let item of income.filter(item => selectDate('month', item.date))) {
		monthIncome += item.summa * 1
	}

	return (
		<ScrollView>
			<CardRashodi titleCard="Расходы" day={dayСonsumption}  week={weekСonsumption} month={monthСonsumption} navigation={navigation} goToScreen="CreateConsumption"/>
			<CardRashodi titleCard="Доходы" day={null} week={weekIncome} month={monthIncome} navigation={navigation}
			             goToScreen="CreateIncome"/>
		</ScrollView>
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
	center:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

const selectDate = (params, date) => {
	return moment(date).isBetween(moment().startOf(params).format('YYYY-MM-DD'), moment().endOf(params).format('YYYY-MM-DD'), null, [])
}