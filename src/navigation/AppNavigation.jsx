import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {FontAwesome, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {createDrawerNavigator} from "@react-navigation/drawer";

import {MainScreen} from "../screens/MainScreen";
import {ConsumptionScreen} from "../screens/ConsumptionScreen";
import {IncomeScreen} from "../screens/IncomeScreen";
import {THEME} from "../theme";
import {AboutScreen} from "../screens/AboutScreen";
import {CreateIncomeScreen} from "../screens/CreateIncomeScreen";
import {CreateConsumptionScreen} from "../screens/CreateConsumptionScreen";


const defaultScreenOptions = {
	headerStyle: {
		backgroundColor: THEME.MAIN_COLOR
	},
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontWeight: 'bold',
	}
};

const ExpenseJournalStack = createStackNavigator();
const ExpenseJournalNavigator = () => {
	return <ExpenseJournalStack.Navigator initialRouteName="Main" screenOptions={defaultScreenOptions}>
		<ExpenseJournalStack.Screen name="Main" component={MainScreen} options={MainScreen.options}/>
		<ExpenseJournalStack.Screen name="Consumption" component={ConsumptionScreen}
		                            options={ConsumptionScreen.options}/>
		<ExpenseJournalStack.Screen name="Income" component={IncomeScreen} options={IncomeScreen.options}/>
		<ExpenseJournalStack.Screen name="CreateIncome" component={CreateIncomeScreen} options={CreateIncomeScreen.options}/>
		<ExpenseJournalStack.Screen name="CreateConsumption" component={CreateConsumptionScreen} options={CreateConsumptionScreen.options}/>
	</ExpenseJournalStack.Navigator>
}

const ConsumptionStack = createStackNavigator();
const ConsumptionNavigator = () => {
	return <ExpenseJournalStack.Navigator initialRouteName="Consumption" screenOptions={defaultScreenOptions}>
		<ExpenseJournalStack.Screen name="Consumption" component={ConsumptionScreen}
		                            options={ConsumptionScreen.options}/>
		<ExpenseJournalStack.Screen name="Main" component={MainScreen} options={MainScreen.options}/>

		<ExpenseJournalStack.Screen name="Income" component={IncomeScreen} options={IncomeScreen.options}/>
	</ExpenseJournalStack.Navigator>
}

const IncomeStack = createStackNavigator();
const IncomeNavigator = () => {
	return <ExpenseJournalStack.Navigator initialRouteName="Income" screenOptions={defaultScreenOptions}>
		<ExpenseJournalStack.Screen name="Income" component={IncomeScreen} options={IncomeScreen.options}/>
		<ExpenseJournalStack.Screen name="Main" component={MainScreen} options={MainScreen.options}/>
		<ExpenseJournalStack.Screen name="Consumption" component={ConsumptionScreen}
		                            options={ConsumptionScreen.options}/>

	</ExpenseJournalStack.Navigator>
}

const AboutStack = createStackNavigator();
const AboutNavigator = () => {
	return <AboutStack.Navigator initialRouteName="Income" screenOptions={defaultScreenOptions}>
		<AboutStack.Screen name="About" component={AboutScreen} options={AboutScreen.options}/>
	</AboutStack.Navigator>
}


/*const CreateIncomeNavigation= createStackNavigator();
const CreateIncomeScreenNavigator = () => {
	return <CreateIncomeNavigation.Navigator initialRouteName="CreateIncome" screenOptions={defaultScreenOptions}>
		<CreateIncomeNavigation.Screen name="CreateIncome" component={CreateIncomeScreen} options={CreateIncomeScreen.options}/>
	</CreateIncomeNavigation.Navigator>
}*/

const BottomNavigatorTab = createMaterialBottomTabNavigator();
const BottomNavigator = () => {
	return (
		<BottomNavigatorTab.Navigator
			shifting={true}
			activeColor="#fff"
			barStyle={THEME.MAIN_COLOR}
		>
			<BottomNavigatorTab.Screen
				name="Main"
				component={ExpenseJournalNavigator}
				options={{
					tabBarLabel: "Журнал доходов",
					tabBarIcon: ({color}) => (
						<Ionicons name="md-journal" color={color} size={25}/>
					)
				}}
			/>
			<BottomNavigatorTab.Screen
				name="Income"
				component={IncomeNavigator}
				options={{
					tabBarLabel: "Все доходы",
					tabBarIcon: ({color}) => (
						<FontAwesome name="money" color={color} size={25}/>
					)
				}}
			/>
			<BottomNavigatorTab.Screen
				name="Consumption"
				component={ConsumptionNavigator}
				options={{
					tabBarLabel: "Все расходы",
					tabBarIcon: ({color}) => (
						<MaterialIcons name="money-off" color={color} size={25}/>
					)
				}}
			/>
		</BottomNavigatorTab.Navigator>
	)

}

const DrawerNavigation = createDrawerNavigator();
const DrawerNavigator = () => {
	return (
		<DrawerNavigation.Navigator
			drawerContentOptions={{
				activeTintColor: THEME.MAIN_COLOR,
				labelStyle: {fontFamily: 'roboto-bold'}
			}}>
			<DrawerNavigation.Screen
				name="Main"
				component={BottomNavigator}
				options={{
					drawerLabel: 'Главная'
				}}
			/>
			<DrawerNavigation.Screen
				name="Income"
				component={AboutNavigator}
				options={{
					drawerLabel: 'О приложении'
				}}
			/>
		</DrawerNavigation.Navigator>
	)
}


const AppNavigation = () => {
	return (
		<NavigationContainer>
			<DrawerNavigator/>
		</NavigationContainer>
	)
}
export default AppNavigation