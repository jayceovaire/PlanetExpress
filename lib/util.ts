
// Utility functions for other pages


export default function calculatePrice(planetDistance, { hazardous, liveAnimal, fragile, oversize }) {
    let multiplier = 1;
    let basePrice = planetDistance > 100 ? planetDistance * 10 : planetDistance > 1 ? planetDistance * 1000 : 1000;

    if (hazardous) {
        multiplier *= 1.45;
    }
    if (liveAnimal) {
        multiplier *= 1.15;
    }
    if (fragile) {
        multiplier *= 1.25;
    }
    if (oversize) {
        multiplier *= 1.35;
    }

    return basePrice * multiplier;
}
