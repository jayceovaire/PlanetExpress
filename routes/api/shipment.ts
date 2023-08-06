import {PrismaClient} from "../../generated/client/runtime/library.js"
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
    const { name, email, planet, hazardous, animal, fragile, oversize, description, cost} = await context.request.body("json").value;

    // Add it to the database using Prisma
    const result = await prisma.shipment.create({
      data: {
      name,
      email,
      planet,
      hazardous,
      animal,
      fragile,
      oversize,
      description,
      cost
      },
    });

    context.response.body = result;
});

export default router;

