import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './style.css'

const Home = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Chat room</h1>
				<div className='buttons'>
					<Button variant='contained' component={Link} to='/login' color='primary'>
						Login
					</Button>
					<Button variant='contained' component={Link} to='/register' color='primary'>
						Sign up
					</Button>
				</div>
			</header>
		</div>
	)
}

export default Home
