import React, {useState} from 'react'
import {Picker, ScrollView, StyleSheet, Text, View} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {useSelector} from "react-redux";
import moment from "moment";
import {Card} from "react-native-material-ui";


export const IncomeScreen = () => {
	const [rubric, setRubric] = useState('month');
	const filterDate = (selector, itemDate) => {
		let date = 0;
		let income = itemDate.split('-');
		let flag = 0;
		let currentDate = moment().get(selector);
		switch(selector){
			case 'day':
				flag = 3;
				date = moment().format('YYYY-MM-DD');
				break;
			case 'week':
				flag = 3;
				//date =
				return moment(income[0] + '-' + income[1] + '-' + income[2]).isBetween(moment().startOf(selector).format('YYYY-MM-DD'), moment().endOf(selector).format('YYYY-MM-DD'), null, [])
			case 'month':
				flag = 2;
				currentDate += 1;
				date = currentDate < 10 ? date = '0' + currentDate : currentDate;
				date = moment().get('year') + '-' + date;
				break;
			case 'year':
				date = currentDate;
				flag = 1;
				break;
			default: flag = 1;
		}
		let incomeDate = '';
		for(let i = 0; i < flag; i++){
			if (incomeDate != ''){
				incomeDate += '-'+income[i]
			}else{
				incomeDate = income[i]*1
			}
		}
		return date === incomeDate
	};
	const income = useSelector(state => state.income.income.filter(item => filterDate(rubric, item.date)));

	return <ScrollView>
		<View style={styles.wrapper}>
			<View>
				<Text>Доход за:</Text>
				<Picker
					style={{backgroundColor: '#f1f1f1'}}
					selectedValue={rubric}
					onValueChange={(itemValue, itemIndex) =>
						setRubric(itemValue)
					}
				>
					<Picker.Item label="Год" value="year"/>
					<Picker.Item label="Месяц" value="month"/>
					<Picker.Item label="Неделю" value="week"/>
					<Picker.Item label="День" value="day"/>
				</Picker>
			</View>
			<View style={styles.list}>
				<Text>Всего</Text>
				<Text> BYN</Text>
			</View>
			{
				income.map(item => {
					return <View style={styles.list} key={item.id}>
						<Text>{item.rubric}</Text>
						<Text>{item.summa} BYN</Text>
					</View>
				})
			}
		</View>
	</ScrollView>
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
	wrapper: {
		backgroundColor: '#fff',
		margin: 10,
		padding: 10
	},
	list:{
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
});