import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";


export default function Shipping() {


    return (
        <body class={"bg-green-300"}>
            <Header />
            <form  className="w-full max-w-sm mx-auto">
  <div className="mb-4">
    <label htmlFor="name" className="block mb-1">Name / Company Name</label>
    <input  name={'name'} required={true} id="name" type="text" className="w-full px-3 py-2 border rounded-md" />
  </div>

  <div className="mb-4">
    <label className="block mb-1">Package type</label>
    <fieldset className="space-y-2">
      <label htmlFor="hazardous">
        <input  name={'hazardous'} id="hazardous" type="checkbox" className="mr-2 ml-2" />
        Hazardous
      </label>
      <label htmlFor="liveAnimal">
        <input  name={'liveAnimal'} id="liveAnimal" type="checkbox" className="mr-2 ml-2" />
        Live Animal
      </label>
      <label htmlFor="fragile">
        <input name={'fragile'} id="fragile" type="checkbox" className="mr-2 ml-2" />
        Fragile
      </label>
      <label htmlFor="oversize">
        <input name={'oversize'} id="oversize" type="checkbox" className="mr-2 ml-2" />
        Oversize
      </label>
      <br></br>
      <label htmlFor={'description'}>Description of Package
        <textarea required={true} id={'description'} name="description" cols="50" rows="5"></textarea>
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