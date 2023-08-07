import { useState } from 'preact/hooks';
import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";
import { Handlers } from "$fresh/src/server/types.ts";

interface Shipment {
    name: string
    email: string
    planet: string
    hazardous: boolean,
    animal: boolean,
    fragile: boolean,
    oversize: boolean,
    description: string,
    cost: number,

}

export const handler: Handlers = {

  async GET(req, ctx) {
    return await ctx.render();
  },

  async POST(req, ctx) {
    const form = await req.formData();

    // Now, destructure all the fields from the form
    const {
      name,
      email,
      planet,
      hazardous,
      animal,
      fragile,
      oversize,
      description,
    } = form.getAll(); // assuming `getAll` returns all the form fields, adjust as necessary

    // Save to database or process the form data as required

    // Redirect user to thank you or success page (or back to form with a success message).
    const headers = new Headers();
    headers.set("location", "/thank-you-for-shipping");
    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  },
};




const Shipping = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    planet: '',
    hazardous: false,
    animal: false,
    fragile: false,
    oversize: false,
    description: '',
    cost: 100
  });


  const handleChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

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
            <label htmlFor="liveAnimal">
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

        <button type="submit" className="block w-full px-4 py-2 mt-4 text-white bg-red-400 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>

      <Footer />
    </body>
        </>
  );
};

export default Shipping;
