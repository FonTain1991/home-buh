import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('home_buh.db')

export class DB {
	static init(){
		return new Promise((resolve, reject) => {
			db.transaction(tx => {
				tx.executeSql(
					'CREATE TABLE IF NOT EXISTS income(id INTEGER PRIMARY KEY NOT NULL,comment TEXT, rubric TEXT, date TEXT, summa INT)',
					[],
					resolve,
					(_, error) => reject(error)
				)
			}),
			db.transaction(tx => {
				tx.executeSql(
					'CREATE TABLE IF NOT EXISTS consumption (id INTEGER PRIMARY KEY NOT NULL,comment TEXT, rubric TEXT, date TEXT, summa INT)',
					[],
					resolve,
					(_, error) => reject(error)
				)
			})
		})
	}

	static get(table){
		return new Promise((resolve, reject) => {
			db.transaction(tx => {
				tx.executeSql(
					`SELECT * FROM ${table} ORDER BY date ASC`,
					[],
					(_, result) => resolve(result.rows._array),
					(_, error) => reject(error)
				)
			})
		})
	}

	static create(table, {comment, date, summa, rubric}){
		return new Promise(((resolve, reject) => {
			db.transaction(tx => {
				tx.executeSql(
					`INSERT INTO ${table} (comment, date, summa, rubric) VALUES (?, ?, ?, ?)`,
					[comment, date, summa, rubric],
					(_, result) => resolve(result.insertId),
					(_, error) => reject(error)
				)
			})
		}))
	}

	static updatePost(post){
		return new Promise((resolve, reject) => {
			db.transaction(tx => {
				tx.executeSql(
					'UPDATE posts SET booked = ? WHERE id = ?',
					[post.booked ? 0 : 1, post.id],
					resolve,
					(_, error) => reject(error)
				)
			})
		})
	}

	static removePost(id){
		return new Promise((resolve, reject) => {
			db.transaction(tx => {
				tx.executeSql(
					'DELETE FROM posts WHERE id = ?',
					[id],
					resolve,
					(_, error) => reject(error)
				)
			})
		})
	}
}