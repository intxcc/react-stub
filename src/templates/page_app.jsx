'use strict'

import React from 'react'
import { observer } from 'mobx-react'
import { withRouter } from 'react-router'

@withRouter
@observer
class App extends React.Component {
	render () {
		return (
			<>
				Halloa
			</>
		)
	}
}

export default App
