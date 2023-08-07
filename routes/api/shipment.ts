// API endpoint for shipping form to send data to and written to PlanetScale Database via Prisma ORM

import {PrismaClient} from "../../generated/client/deno/edge.ts";
import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { load } from "https://deno.land/std@0.197.0/dotenv/mod.ts";

const envVars = await load();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

const router = new Router();

router.post("/shipment", async (context) => {
    // Extract shipment data from the request body
    const body = context.request.body({ type: "json" });
    const data = await body.value;
    const { planet, hazardous, animal, fragile, oversize, description, cost, email, name } = data;

    // Add it to the database using Prisma
    const result = await prisma.shipment.create({
      data: {
          planet,
          hazardous,
          animal,
          fragile,
          oversize,
          description,
          cost,
          email,
          name
      },
    });

    context.response.body = result;
});



