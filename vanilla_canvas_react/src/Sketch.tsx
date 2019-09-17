import * as React from 'react'
import {useState, useRef, useEffect} from 'react'
import classNames from 'classnames'
import style from './style.scss'

interface Props {
	color?: string
}

export const Sketch : React.FC<Props> = (props) => {
	const [width, setWidth] = useState(window.innerWidth)
	const [height, setHeight] = useState(window.innerHeight)
	const canvasRef = useRef(null)
	setTimeout(() => {
		setWidth(width-1)
	}, 1000/30)
	useEffect(() => {
		const context = canvasRef.current.getContext("2d")
		context.fillStyle = "hsl(0, 0%, 100%)";
		context.fillRect(0, 0, width, height);
		context.strokeStyle = props.color;
		context.beginPath();
		context.arc(width / 2, height / 2, width / 4, 0, Math.PI * 2);
		context.stroke();
	}, );

	return <canvas ref={canvasRef}
					className={classNames(style.canvas)}
				   width={1800}
				   height={900}/>
}
