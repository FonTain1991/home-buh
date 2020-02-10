import * as Font from 'expo-font'

export async function bootstrap(){
	try {
		await Font.loadAsync({
			'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
			'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf')
		});
	}catch (e) {
		console.log(e)
	}
}