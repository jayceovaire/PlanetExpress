import planet_key from "../../main.ts";
import calculatePrice from "../../lib/util.ts";
import {prisma} from "../../lib/prisma.ts";
import {Handlers} from "$fresh/src/server/types.ts";

type Shipment = {
    name: string
    email: string
    planet: string
    hazardous: boolean,
    animal: boolean,
    fragile: boolean,
    oversize: boolean,
    description: string,
    cost?: number,

}


export const handler: Handlers = {
  // ... (your GET handler, if it exists)

  async POST(req: Request) {
        try {
            const form = await req.formData();

            const shipmentData: Shipment = {
                name: form.get("name")?.toString() || '',
                email: form.get("email")?.toString() || '',
                planet: form.get("planet")?.toString() || '',
                hazardous: form.get("hazardous") === "on",
                animal: form.get("animal") === "on",
                fragile: form.get("fragile") === "on",
                oversize: form.get("oversize") === "on",
                description: form.get("description")?.toString() || '',
            };

            // Fetch planet data
            const response = await fetch(`https://api.api-ninjas.com/v1/planets?name=${shipmentData.planet}`, {
                headers: { 'X-Api-Key': planet_key }
            });

            if (response.status === 200) {
                const planetData = await response.json();
                const planetDistance = planetData[0].distance_light_year;

                shipmentData.cost = calculatePrice(planetDistance, shipmentData);

                const newShipping = await prisma.shipment.create({
                    data: {
                        ...shipmentData
                    }
                });

                // Redirect user to thank you page.
                const headers = new Headers();
                headers.set("location", "/thank-you");
                return new Response(null, {
                    status: 303, // See Other
                    headers,
                });
            } else {
                console.error(`ERROR: ${response.status}`);
                return new Response(JSON.stringify({ success: false, message: "Failed to fetch planet data" }), { status: 500 });
            }
        } catch (error) {
            console.error(error);
            return new Response(JSON.stringify({ success: false, message: "Server Error" }), { status: 500 });
        }
    }
};


