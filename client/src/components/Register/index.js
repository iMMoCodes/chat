import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import './style.css'

const Register = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const registerUser = async () => {
		const res = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
			}),
		}).then((t) => t.json())

		console.log(res)
	}

	return (
		<div className='form'>
			<h1>Register</h1>
			<form className='register-fields'>
				<TextField
					fullWidth
					placeholder='your@email.com'
					label='Your Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					variant='outlined'
				/>
				<TextField
					fullWidth
					placeholder='p@$$w0rd'
					label='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					variant='outlined'
				/>
				<Button color='primary' variant='contained' onClick={registerUser}>
					Register
				</Button>
			</form>
		</div>
	)
}

export default Register
