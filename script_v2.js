if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(reg=>console.log('Service Worker Registrado.',reg))
	.catch(err=>console.log('Error al Registrar Service Worker.',err))
}