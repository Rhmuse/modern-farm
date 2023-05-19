import { addPlant, usePlants } from "./field.js";
import { createAsparagus } from './seeds/asparagus.js';
import { createCorn } from './seeds/corn.js';
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower } from './seeds/sunflower.js';
import { createWheat } from './seeds/wheat.js';

export const tractor = (plan) => {
    for (const row of plan) {
        for (const seed of row) {
            if (seed === "Asparagus") {
                const asparagus = createAsparagus();
                addPlant(asparagus);
            } else if (seed === "Corn") {
                const corn = createCorn();
                addPlant(corn[0]);
            } else if (seed === "Potato") {
                const potato = createPotato();
                addPlant(potato);
            } else if (seed === "Soybean") {
                const soybean = createSoybean();
                addPlant(soybean);
            } else if (seed === "Sunflower") {
                const sunflower = createSunflower();
                addPlant(sunflower);
            } else if (seed === "Wheat") {
                const wheat = createWheat();
                addPlant(wheat);
            }
        }
    }
    let sownField = usePlants();
    // console.log(sownField);
    return sownField;
}