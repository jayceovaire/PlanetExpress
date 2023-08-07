
import {prisma} from "../../lib/prisma.ts";
import {Handlers} from "$fresh/src/server/types.ts";


export const handler: Handlers = {
  // ... (your GET handler, if it exists)

  async POST(req, ctx) {
    try {
      const formData = await req.formData();
      const data: Shipment = {
        name: formData.get("name")?.toString() || "",
        description: formData.get("description")?.toString() || "",
        planet: formData.get("planet")?.toString() || "",
        email: formData.get("email")?.toString() || "",
        // ... (get the rest of your form fields in a similar manner)
        hazardous: formData.get("hazardous") === "on",
        animal: formData.get("animal") === "on",
        fragile: formData.get("fragile") === "on",
        oversize: formData.get("oversize") === "on",
        cost: 100 // If this is dynamic, update accordingly.
      };

      console.log("Parsed form data:", data);

      // Inserting to database using Prisma
      const newShipping = await prisma.shipment.create({
          data
      });

      return new Response(JSON.stringify({ success: true, data: newShipping }), { status: 200 });

    } catch (error) {
      console.error("Failed to process form data:", error);
      return new Response(JSON.stringify({ success: false, message: "Server Error" }), { status: 500 });
    }
  },
};

// ... (the rest of your file, if there are any other exports or logic)
