import React from 'react'
import { Route } from 'react-router-dom'
import LoginPage from "./LoginPage/LoginPage"
import TerminalsPage from './TerminalsPage/TerminalsPage'
import BuyersPage from './BuyersPage/BuyersPage'
import BuyerPage from './BuyersPage/ByerPage/BuyerPage'

export const LOG_IN_PATH = '/'
export const TERMINALS_PATH = '/terminals'
export const BUYERS_PATH = '/buyers'


const Routes = () => {
	return (
		<>
			<Route exact path={LOG_IN_PATH} component={LoginPage} />
			<Route path={TERMINALS_PATH} component={TerminalsPage} />
			<Route exact path={BUYERS_PATH} component={BuyersPage} />
			<Route path={`${BUYERS_PATH}/:id`} component={BuyerPage} />

		</>
	);
};

export default Routes;

