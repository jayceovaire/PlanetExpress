import {prisma} from "./lib/prisma.ts";

async function main() {
   const shipment = await prisma.shipment.create({
        data: {
            planet: 'test',
            hazardous: false,
            animal: false,
            fragile: false,
            oversize: false,
            description: 'test test test',
            cost: 1000,
            email: 'test@testmail.com',
            name: 'testname'

        }
    })
console.log(shipment)
}

main()
.catch(e => {
    console.error(e.message)
})
.finally(async () => {
    await prisma.$disconnect()
})

export default main()