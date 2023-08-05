import { useState } from 'preact/hooks';
import {useEffect} from "https://esm.sh/stable/preact@10.15.1/denonext/hooks.js";


export default function PlanetPage() {
    const [data, setData] = useState(null);
    const [planetName, setPlanetName] = useState('');
    const [hazardous, setHazardous] = useState(false);
    const [priceEstimate, setPriceEstimate] = useState("");



    useEffect(() => {
        if (!data || !data.distance_light_year){
            setPriceEstimate("")
        }
        if (!hazardous){
            setPriceEstimate(data.distance_light_year > 100 ? '$' + data.distance_light_year * 10 :
                data.distance_light_year > 1 ? data.distance_light_year * 1000 : "$1000")
        }
        if (hazardous) {
            setPriceEstimate(data.distance_light_year > 100 ? '$' + data.distance_light_year * 15 :
                data.distance_light_year > 1 ? data.distance_light_year * 1500 : "$1500")
        }
    }, [hazardous, data])


    const fetchPlanet = async () => {

        const response = await fetch(`https://api.api-ninjas.com/v1/planets?name=${planetName}`, {
            headers: {'X-Api-Key': Deno.env.get('PLANET_KEY')}
        });

        if (response.status === 200) {
            const planetData = await response.json();
            setData(planetData[0]);  // If the API returns an array, we only want the first item
        }
    };



    return (
        <div>
            <h1 class={'text-3xl font-bold text-center p-4'}>Estimate the Cost to Ship your package</h1>
            <div class={"grid grid-cols-12 gap-4 m-4"}>
                <input type={'checkbox'} id={'dangerCheckbox'} className={'col-start-5 col-span-2 form-checkbox mr-2'} onChange={e => setHazardous(e.target.checked)} />
                <label className={'col-start-7 col-span-2 text-center bg-yellow-200 rounded-sm'} htmlFor={'dangerCheckbox'}>Hazardous Material?</label>
                <input placeholder={'Type Planet Name Here'} class={'col-start-5 col-span-2'} type="text" value={planetName} onChange={e => setPlanetName(e.target.value)} />
            <button class={'bg-red-400 rounded-sm col-start-7 col-span-2'} onClick={fetchPlanet}>Fetch Planet</button>

            </div>

            {!data && (
                <div className={'grid grid-cols-12 grid-rows-4 gap-4 m-4'}>
                    <div className="h-10 flex justify-center items-center row-start-1 col-start-5 col-span-2 text-center text-black bg-white rounded-md">
                        Destination Planet:
                    </div>
                    <div className="h-10 flex justify-center items-center row-start-1 col-start-7 col-span-2 text-center text-black bg-white rounded-md">

                    </div>
                    <div className="h-10 flex justify-center items-center col-start-5 col-span-2 row-start-2 text-center text-black bg-white rounded-md">
                        <p>Distance in Light Years from Earth: </p>
                    </div>
                    <div className={"h-10 flex justify-center items-center col-start-7 col-span-2 row-start-2 text-center text-black bg-white rounded-md"}>

                    </div>
                    <div className={'h-10 flex justify-center items-center rounded-md col-start-5 col-span-2 row-start-3 text-center text-black bg-white'}>
                        Cost to ship:
                    </div>
                    <div className={'h-10 flex justify-center items-center rounded-md col-start-7 col-span-2 row-start-3 text-center text-black bg-white'}>

                    </div>
                </div>
            )}



            {data && (
                <>
                <div class={'grid grid-cols-12 grid-rows-3 gap-4 m-4'}>
                    <div class="h-10 flex justify-center items-center row-start-1 col-start-5 col-span-2 text-center text-black bg-white rounded-md">
                        Destination Planet:
                    </div>
                    <div className="h-10 flex justify-center items-center row-start-1 col-start-7 col-span-2 text-center text-black bg-white rounded-md">
                        {data.name}
                    </div>
                    <div class="h-10 flex justify-center items-center col-start-5 col-span-2 row-start-2 text-center text-black bg-white rounded-md">
                        <p>Distance in Light Years from Earth: </p>
                    </div>
                    <div class={"h-10 flex justify-center items-center col-start-7 col-span-2 row-start-2 text-center text-black bg-white rounded-md"}>
                        {data.distance_light_year}
                    </div>
                    <div class={'h-10 flex justify-center items-center rounded-md col-start-5 col-span-2 row-start-3 text-center text-black bg-white'}>
                        Cost to ship:
                    </div>
                    <div className={'h-10 flex justify-center items-center rounded-md col-start-7 col-span-2 row-start-3 text-center text-black bg-white'}>
                        {priceEstimate}
                    </div>
                    </div>
                    <div className="grid grid-cols-12 justify-center mt-4">
            {/* Empty columns before the button because for some reason starting a div at 5 on its own breaks the grid */}
            <div className="col-start-1 col-span-4"></div>
            <button className="col-start-5 col-span-4 rounded-md bg-red-400 h-10 text-black">Ship my Package!</button>
            {/* Empty columns after the button(see comment above) */}
            <div className="col-start-10 col-span-3"></div>
          </div>
                    </>

            )}
        </div>
    );
}
