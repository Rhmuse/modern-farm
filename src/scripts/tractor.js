import { addPlant, usePlants } from "./field.js"

export const tractor = (plan) => {
    for (const row of plan) {
        for (const seed of row) {
            if (typeof seed === Array) {
                addPlant(seed[0])
            } else {
                addPlant(seed);
            }
        }
    }
    let sownField = usePlants();
    console.log(sownField);
}