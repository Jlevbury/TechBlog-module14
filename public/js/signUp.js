const signupFormHandler = async (event) => {
	event.preventDefault();

	const name = document.querySelector("#name").value.trim();
	const email = document.querySelector("#email").value.trim();
	const password = document.querySelector("#password").value.trim();

	if (name && email && password) {
		const response = await fetch("/api/signup", {
			method: "POST",
			body: JSON.stringify({ name, email, password }),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			document.location.replace("/profile");
		} else {
			alert(response.statusText);
		}
	}
};
document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);