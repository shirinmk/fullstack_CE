async function fetchUsers() {
	try {
		const response = await fetch('../../../data/employees.json') 
		const users = await response.json()
		for (let user of users) {
			document.body.innerHTML += `${user.name}<br>${user.email}<br><br>`
		}
	} catch (error) {
		console.error(error)
	}
}
fetchUsers()
