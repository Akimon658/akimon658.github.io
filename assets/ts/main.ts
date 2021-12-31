import { button } from './button'
import { header } from './header'

declare var mediumZoom: any

document.addEventListener('DOMContentLoaded', function () {
	if (typeof mediumZoom === 'function') {
		mediumZoom('.img-zoomable', {
			margin: 32,
			background: '#00000054',
			scrollOffset: 128,
		})
	}
})

button()
header()
