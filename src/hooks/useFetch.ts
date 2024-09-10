import axios from 'axios'

const useFetch = (url: string, inputValue: string) => {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		axios
			.get(url)
			.then(resp => {
				const parser = new DOMParser()
				const doc = parser.parseFromString(resp.data, 'text/html')
				const text = doc.body.textContent
				const jsonObject = { text }
				setData(JSON.stringify(jsonObject))
				setError(null)
			})
			.catch(error => {
				setError(error?.message)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [url, inputValue])

	return { data, isLoading, error }
}

export default useFetch
