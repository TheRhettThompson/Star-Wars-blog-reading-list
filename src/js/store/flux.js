const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: []
			 
		},

		actions: {
			// GET request for People
			getPeople: () => {
				fetch('https://swapi.dev/api/people/')
				.then(data => data.json())
				.then(res => setStore({people: res.results}))
			},

			// GET request for Planets
			getPlanets: () => {
				fetch('https://swapi.dev/api/planets/')
				.then(data => data.json())
				.then(res => setStore({planets: res.results}))
			},

			//GET request for Vehicles
			getVehicles: () => {
				fetch('https://swapi.dev/api/vehicles/')
				.then(data => data.json())
				.then(res => setStore({vehicles: res.results}))
			}

 
		}
	};
};

export default getState;
