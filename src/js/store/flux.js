const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
			 
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
			},

			//FUNCTION to add Heart CLICKS to Favorites List 
			addToFavorites: (name) => {
				const newFav = { name: name}
				setStore({favorites: getStore().favorites.concat(newFav)})
			},

			//DELETE ITEM FROM FAVORITES
			deleteFromFavorites: (name) => {
				const delFav = getStore().favorites.filter((fav) => fav.name !== name)
				setStore({favorites: delFav})
			}

 
		}
	};
};

export default getState;
