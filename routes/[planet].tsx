import {HandlerContext} from "https://deno.land/x/fresh@1.2.0/src/server/types.ts";

export type Planet = Planet2[]

export interface Planet2 {
  name: string
  mass: number
  radius: number
  period: number
  semi_major_axis: number
  temperature: number
  distance_light_year: number
  host_star_mass: number
  host_star_temperature: number
}

export const handler: Handlers<Planet2 | null> = {
    async GET(_: Request, ctx: HandlerContext): Promise<Response> {
        const { planet } = ctx.params
        const response = await fetch(`https://api.api-ninjas.com/v1/planets?name=${planet}`,
            {headers: {
            'X-Api-Key': `m/jBujjh0JzEhse5IA5HvA==phxNAGd6Jm50hFE2`}
    }
    )
        if (response.status === 200){
        const planet: Planet2 = await response.json()
        return ctx.render(planet)}
    }

}

export default function PlanetInfo({ data }:PageProps<Planet2 | null>){
    if(!data){
        return <h1>Data is not available</h1>
    }


    return (
        <>
            {data.map((planet) => (
                <body class="bg-green-300" key={planet.name}>
                    <div class="my-10 text-center text-3xl text-black">
                        {planet.name}
                    </div>
                    <div class="my-10 text-center text-3xl text-black">
                        {planet.distance_light_year} Light-years from Earth
                    </div>
                </body>
            ))}
        </>
    );
}