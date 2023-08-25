'use strict'

document.addEventListener('submit', function (event) {
	async function handleSubmit() {
		event.preventDefault()

		const form = event.target
		const errorCount = validateForm(form)

		if (errorCount === 0) {
			form.classList.add('_sending')
			try {
				const response = await fetch('sendmail.php', {
					method: 'POST',
					body: new FormData(form),
				})

				if (response.ok) {
					const result = await response.json()
					alert(result.message)
					form.reset()
					form.classList.remove('_sending')
				} else {
					form.classList.remove('_sending')
					alert('Error')
				}
			} catch (error) {
				console.error('Error while sending the request:', error)
				form.classList.remove('_sending')
			}
		} else {
			alert('Please fill in the required field')
		}
	}

	function validateForm(form) {
		let errorCount = 0
		const requiredFields = form.querySelectorAll('._req')

		for (const field of requiredFields) {
			clearError(field)

			if (field.getAttribute('type') === 'checkbox' && !field.checked) {
				showError(field)
				errorCount++
			} else if (field.value.trim() === '') {
				showError(field)
				errorCount++
			}
		}

		return errorCount
	}

	function showError(element) {
		element.parentElement.classList.add('_error')
		element.classList.add('_error')
	}

	function clearError(element) {
		element.parentElement.classList.remove('_error')
		element.classList.remove('_error')
	}

	handleSubmit()
})
