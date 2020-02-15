import * as Font from 'expo-font'
import {DB} from "./db";

export async function bootstrap(){
	try {
		await Font.loadAsync({
			'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
			'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf')
		});
		console.log('DataBase started...');
		await DB.init()
	}catch (e) {
		console.log(e)
	}
}