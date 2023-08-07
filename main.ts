/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
import * as mod from "https://deno.land/std@0.197.0/flags/mod.ts";
import {load} from "https://deno.land/std@0.197.0/dotenv/mod.ts";
import {prisma} from "./lib/prisma.ts";

await load()

const shipment = await prisma.shipment.findFirst({
    select: {
    id: true,
    createdAt: true,
    updatedAt: true,
    planet: true,
    hazardous: false,
    animal: false,
    fragile: false,
    oversize: false,
    description: true,
    cost: true,
    email: true,
    name: true
  },
    where: {
        id: 7
    },
  take: 1
})


console.log(shipment)

// Getting environment variables for API use
const planet_key = Deno.env.get('PLANET_KEY')
export default planet_key
await start(manifest, { plugins: [twindPlugin(twindConfig)] });
