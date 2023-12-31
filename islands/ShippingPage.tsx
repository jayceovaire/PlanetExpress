import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";
import {useEffect, useState} from 'preact/hooks';
import planet_key from "../main.ts";

export default function ShippingPageData() {

  const [state, setState] = useState({
    name: '',
    email: '',
    planet: '',
    hazardous: false,
    animal: false,
    fragile: false,
    oversize: false,
    description: '',
    cost: 0
  });


  const handleChange = (event) => {

    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const fetchPlanetData = async (planetName) => {
    const response = await fetch(`https://api.api-ninjas.com/v1/planets?name=${planetName}`, {
      headers: { 'X-Api-Key': planet_key }
    });

    if (response.status === 200) {
      const planetData = await response.json();
      if (planetData && planetData[0]) {
        const data = planetData[0];
        // Here you can set the state with planetData or perform any other operations.
        // For example: setState({ ...state, planetData: data });
      }
    } else {
      console.error(`ERROR: ${response.status}`);
    }
  };

  useEffect(() => {
    // This will fetch planet data every time the planet name changes.
    if (state.planet) {
      fetchPlanetData(state.planet);
    }
  }, [state.planet]);


  return (
      <>
    <body class="bg-green-300">
    <Header />
      <form action={'api/create'} method={'POST'} encType={'multipart/form-data'} className="w-full max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Name / Company Name</label>
          <input
            name="name"
            required={true}
            id="name"
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            value={state.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Package type</label>
          <fieldset className="space-y-2">
            <label htmlFor="hazardous">
              <input
                name="hazardous"
                id="hazardous"
                type="checkbox"
                className="mr-2 ml-2"
                checked={state.hazardous}
                onChange={handleChange}
              />
              Hazardous
            </label>
            <label htmlFor="animal">
              <input
                name="animal"
                id="animal"
                type="checkbox"
                className="mr-2 ml-2"
                checked={state.animal}
                onChange={handleChange}
              />
              Live Animal
            </label>
            <label htmlFor="fragile">
              <input
                name="fragile"
                id="fragile"
                type="checkbox"
                className="mr-2 ml-2"
                checked={state.fragile}
                onChange={handleChange}
              />
              Fragile
            </label>
            <label htmlFor="oversize">
              <input
                name="oversize"
                id="oversize"
                type="checkbox"
                className="mr-2 ml-2"
                checked={state.oversize}
                onChange={handleChange}
              />
              Oversize
            </label>
            <br></br>
            <label htmlFor="description">Description of Package
              <textarea
                required={true}
                id="description"
                name="description"
                cols="50"
                rows="5"
                value={state.description}
                onChange={handleChange}
              ></textarea>
            </label>
          </fieldset>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email Address</label>
          <input
            required={true}
            id="email"
            type="email"
            className="w-full px-3 py-2 border rounded-md"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="destination" className="block mb-1">Destination</label>
          <input
            required={true}
            id="destination"
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            name="planet"
            value={state.planet}
            onChange={handleChange}
          />
        </div>


        <button type="submit" className="block w-full px-4 py-2 mt-4 text-white bg-red-400 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>

    <Footer />
    </body>
        </>
  );
};

