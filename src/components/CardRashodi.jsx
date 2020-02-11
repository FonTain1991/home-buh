import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Button, Card} from "react-native-elements";
import {FontAwesome} from "@expo/vector-icons";
import {THEME} from "../theme";

export const CardRashodi = ({titleCard, navigation, goToScreen}) => {
	const goTo = () => {
		navigation.navigate(goToScreen)
	};

	return (
		<Card title={titleCard}>
			<View style={styles.cardWrapper}>
				<View style={styles.cardView}>
					<View style={styles.cardViewRow}>
						<Text>День</Text>
						<Text style={styles.summa}>123 BYN</Text>
					</View>
					<View style={styles.devider}></View>
					<View style={styles.cardViewRow}>
						<Text>Неделя</Text>
						<Text style={styles.summa}>456 BYN</Text>
					</View>
					<View style={styles.devider}></View>
					<View style={styles.cardViewRow}>
						<Text>Месяц</Text>
						<Text style={styles.summa}>789 BYN</Text>
					</View>
				</View>
				<View style={{marginLeft: 30}}>
					<Button icon={
						<FontAwesome
							name="plus"
							size={20}
							color="white"
						/>
					}
					        onPress={goTo}
					/>
				</View>
			</View>
		</Card>
	)
}
const styles = StyleSheet.create({
	title: {
		backgroundColor: THEME.MAIN_COLOR,
		padding: 10,
		color: '#fff'
	},
	cardWrapper: {
		backgroundColor: '#fff',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	cardViewRow: {
		marginTop: 5,
		marginBottom: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	cardView: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	devider: {
		height: 1,
		backgroundColor: THEME.MAIN_COLOR
	},
	summa: {
		fontFamily: 'roboto-bold',
		fontSize: 16,
		color: THEME.MAIN_COLOR
	}
});