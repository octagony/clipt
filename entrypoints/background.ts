import { browser } from 'wxt/browser'

export default defineBackground(() => {
	browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
		console.log(message)
	})
})
