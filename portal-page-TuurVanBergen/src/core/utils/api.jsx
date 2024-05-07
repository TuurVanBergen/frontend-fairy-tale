async function api(url) {
	const response = await fetch(url);
	return response.json();
}
export default api;
