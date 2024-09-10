import useFetch from '@/src/hooks/useFetch'
import { useState } from 'react'
import './App.css'

function App() {
	const [link, setLink] = useState('')
	const [count, setCount] = useState(0)

	const { data, isLoading, error } = useFetch(link, link)

	return (
		<>
			{link}
			{isLoading}
		</>
	)
}

export default App
