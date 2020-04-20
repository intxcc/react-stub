'use strict'

import './scss/index.scss'

import App from './templates/page_app'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { rootStore } from './models/root'

// RENDER APP //

ReactDOM.render(
	<Router>
		<App store={rootStore} />
	</Router>,
	document.getElementById('app')
)

if (module.hot) {
	module.hot.accept()
}
