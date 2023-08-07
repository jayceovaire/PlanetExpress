import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";
import {h} from "https://esm.sh/stable/preact@10.15.1/denonext/preact.mjs";
import {useState} from "https://esm.sh/stable/preact@10.15.1/denonext/hooks.js";
// Form needs action attribute
// does it work


export default function Shipping() {

  const [shipmentData, setShipmentData] = useState({
        name: "",
        packageType: "",
        destination: "",
        email: ""
    });

    const handleChange = (event) => {
        setShipmentData({
            ...shipmentData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("/api/shipment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(shipmentData)
        });

        const data = await response.json();
        console.log(data);
    };

    return (
        <body class={"bg-green-300"}>
            <Header />
            <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
  <div className="mb-4">
    <label htmlFor="name" className="block mb-1">Name / Company Name</label>
    <input onChange={handleChange} name={'name'} required={true} id="name" type="text" className="w-full px-3 py-2 border rounded-md" />
  </div>

  <div className="mb-4">
    <label className="block mb-1">Package type</label>
    <fieldset className="space-y-2">
      <label htmlFor="hazardous">
        <input onChange={handleChange} name={'hazardous'} id="hazardous" type="checkbox" className="mr-2 ml-2" />
        Hazardous
      </label>
      <label htmlFor="liveAnimal">
        <input onChange={handleChange} name={'liveAnimal'} id="liveAnimal" type="checkbox" className="mr-2 ml-2" />
        Live Animal
      </label>
      <label htmlFor="fragile">
        <input onChange={handleChange} name={'fragile'} id="fragile" type="checkbox" className="mr-2 ml-2" />
        Fragile
      </label>
      <label htmlFor="oversize">
        <input onChange={handleChange} name={'oversize'} id="oversize" type="checkbox" className="mr-2 ml-2" />
        Oversize
      </label>
      <br></br>
      <label htmlFor={'description'}>Description of Package
        <textarea onChange={handleChange} required={true} id={'description'} name="description" cols="50" rows="5"></textarea>
      </label>
    </fieldset>
  </div>

  <div className="mb-4">
    <label htmlFor="destination" className="block mb-1">Destination</label>
    <input required={true} id="destination" type="text" className="w-full px-3 py-2 border rounded-md" />
  </div>

  <div className="mb-4">
    <label htmlFor="email" className="block mb-1">Email Address</label>
    <input required={true} id="email" type="email" className="w-full px-3 py-2 border rounded-md" />
  </div>

  <button type="submit" className="block w-full px-4 py-2 mt-4 text-white bg-red-400 rounded-md hover:bg-blue-600">
    Submit
  </button>
</form>

            <Footer />

        </body>

    )
}