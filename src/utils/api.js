const urls = [
	"http https://swapi.dev/api/people/1",
	"http https://swapi.dev/api/people/2",
	"http https://swapi.dev/api/people/3",
	"http https://swapi.dev/api/people/4",
	"http https://swapi.dev/api/people/5",
	"http https://swapi.dev/api/people/6",
	"http https://swapi.dev/api/people/7",
	"http https://swapi.dev/api/people/8",
	"http https://swapi.dev/api/people/9",
	"http https://swapi.dev/api/people/10"
]

export const fetchData = async () => {
	try {
		const response = await Promise.all(
			urls.map(url => fetch(url).then(res => res.json()))
		);
		console.log(response);
		return response;
	} catch (error) {
		console.log('Error', error);
	}
};