import mongoose from 'mongoose'
import { HttpException } from '../../types/HttpException'

export async function connect() {
	try {
		if (!process.env.DATABASE_URL) {
			throw new HttpException(500, 'Missing DATABASE_URL on .env')
		} else {
			await mongoose.connect(process.env.DATABASE_URL)
			console.log('Connected database!')
		}
	} catch (error: any) {
		throw new HttpException(500, error.message)
	}
}