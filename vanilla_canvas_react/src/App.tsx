import * as React from 'react'
import {useState} from 'react'
import {Sketch} from './Sketch'


export const App = () => {
	const [color, setColor] = useState('black')
	return (
		<React.Fragment>
			<select onChange={e => setColor(e.target.value)}>
				<option>black</option>
				<option>blue</option>
				<option>pink</option>
			</select>
			<div>
				<Sketch color={color}/>
			</div>
		</React.Fragment>
	)
}
