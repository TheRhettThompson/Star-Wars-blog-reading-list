const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			 

			
			
		},
		actions: {
			// Get request for People
			getPeople: () => {
				fetch('https://swapi.dev/api/people/')
				.then(data => data.json())
				.then(res => setStore({people: res.results}))
			}



			//exampleFunction: () => {
				//getActions().changeColor(0, "green");
			//},
			//loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			//},
			//changeColor: (index, color) => {
				//get the store
				//
				//we have to loop the entire demo array to look for the respective index
				//and change its color
				//const demo = store.demo.map((elm, i) => {
					//if (i === index) elm.background = color;
					//return elm;
				//});

				//reset the global store
				//setStore({ demo: demo });
			//}
		}
	};
};

export default getState;
