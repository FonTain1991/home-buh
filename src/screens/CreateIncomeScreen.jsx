import React, {useEffect, useState} from 'react';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {Button, Keyboard, Picker, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useDispatch} from 'react-redux';

import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {THEME} from "../theme";
import {Card} from "react-native-elements";
import {addIncome} from "../store/actions/income";
import moment from "moment";

export const CreateIncomeScreen = ({navigation}) => {
	const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
	const [isVisible, setIsVisible] = useState(false);
	const [rubric, setRubric] = useState('Java');
	const [summa, setSumma] = useState('');
	const [comment, setComment] = useState('');
	const dispatch = useDispatch();

	const saveHandler = () => {
		const dohod = {
			date, rubric, summa, comment
		};
		dispatch(addIncome(dohod));
		navigation.navigate('Main')
	}

	const showDatePicker = () => {
		setIsVisible(true)
	};

	const hideDatePicker = () => {
		setIsVisible(false)
	};

	const handleConfirm = newDate => {
		setIsVisible(false);
		setDate(moment(newDate).format('YYYY-MM-DD'));
	};

	return (
		<TouchableWithoutFeedback onPress={() => {
			Keyboard.dismiss()
		}}>
			<Card containerStyle={{height: '95%'}}>
				<Text>День</Text>
				<Button title={date.toLocaleString()} onPress={showDatePicker} />
				<DateTimePickerModal
					isVisible={isVisible}
					mode="date"
					onConfirm={handleConfirm}
					onCancel={hideDatePicker}
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
						padding: 10,
						marginBottom: 10
					}}
				/>
				<Button disabled={!summa} title='Сохранить' onPress={saveHandler}/>
			</Card>
		</TouchableWithoutFeedback>
	)
};

CreateIncomeScreen.options = ({navigation}) => ({
	headerTitle: 'Добавление дохода',
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