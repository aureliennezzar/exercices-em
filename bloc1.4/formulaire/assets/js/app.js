document.addEventListener('DOMContentLoaded', function () {
	var app = {
		init: function () {
			console.log('STARTER');
			app.formSubmit()
		},
		formSubmit: function () {
			const form = document.querySelector('.form')
			form.addEventListener('submit', function (e) {
				e.preventDefault()
			})
		}
	}
	app.init()
})