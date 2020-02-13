import React, {useState} from 'react';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {Button, Keyboard, Picker, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native'
import DatePicker from 'react-native-datepicker'
import moment from 'moment'

import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {THEME} from "../theme";
import {Card} from "react-native-elements";

export const CreateIncomeScreen = () => {
	const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
	const [isVisible, setIsVisible] = useState(false);
	const [rubric, setRubric] = useState('');
	const [summa, setSumma] = useState('');
	const [comment, setComment] = useState('');

	const saveHandler = () => {
		const dohod = {
			date, rubric, summa, comment
		}
		console.log(dohod)
	}

	return (
		<TouchableWithoutFeedback onPress={() => {
			Keyboard.dismiss()
		}}>
			<Card containerStyle={{height: '95%'}}>
				<Text>День</Text>
				<DatePicker
					style={{width: '100%'}}
					date={date}
					mode="date"
					placeholder="Выберите дату"
					format="YYYY-MM-DD"
					minDate="2020-01-01"
					maxDate="2100-01-01"
					confirmBtnText="Confirm"
					cancelBtnText="Cancel"
					customStyles={{
						dateIcon: {
							position: 'absolute',
							left: 0,
							top: 4,
							marginLeft: 0
						},
						dateInput: {
							marginLeft: 36
						}
					}}
					onDateChange={(date) => {
						setDate(date)
					}}
				/>
				<Text style={{marginTop: 15}}>Категория</Text>
				<Picker
					style={{
						backgroundColor: '#f1f1f1'
					}}
					selectedValue={rubric}
					onValueChange={(itemValue, itemIndex) =>
						setRubric(itemValue)
					}
				>
					<Picker.Item label="Java" value="java"/>
					<Picker.Item label="JavaScript" value="js"/>
					<Picker.Item label="React" value="React"/>
					<Picker.Item label="Redux" value="Redux"/>
					<Picker.Item label="React Native" value="React Native"/>
				</Picker>
				<View>
					<Text style={{marginTop: 15}}>Сумма</Text>
					<TextInput
						value={summa}
						onChangeText={setSumma}
						placeholder='Введите сумму...'
						keyboardType="number-pad"
						style={{
							borderWidth: 1,
							height: 40,
							paddingLeft: 10
						}}
					/>
				</View>
				<TextInput
					value={comment}
					onChangeText={setComment}
					placeholder='Введите комментарий...'
					style={{
						marginTop: 15,
						borderBottomWidth: 1,
						padding: 10
					}}
				/>
				<Button title='Сохранить' onPress={saveHandler}/>
			</Card>
		</TouchableWithoutFeedback>
	)
};

CreateIncomeScreen.options = ({navigation}) => ({
	headerTitle: 'Добавление дохода',
	headerRight: () => {
		return <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
			<Item title='Назад' iconName='md-arrow-back' onPress={() => navigation.goBack()}/>
		</HeaderButtons>
	},
	headerLeft: () => {
		return <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
			<Item title='Назад' iconName='md-arrow-back' onPress={() => navigation.goBack()}/>
		</HeaderButtons>
	}
});

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