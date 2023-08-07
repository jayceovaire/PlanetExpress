// API endpoint for shipping form to send data to and written to PlanetScale Database via Prisma ORM

import {PrismaClient} from "../../generated/client";
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
    const { name, packageType, destination, email } = await context.request.body("json").value;

    // Add it to the database using Prisma
    const result = await prisma.shipment.create({
      data: {
        name,
        packageType,
        destination,
        email
      },
    });

    context.response.body = result;
});
