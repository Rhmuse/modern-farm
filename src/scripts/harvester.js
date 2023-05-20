export const harvestPlants = (sownField) => {
    let harvest = [];
    let output = 0;
    for (const plant of sownField) {
        if (plant.type === "Corn") {
            output = plant.output / 2;
        } else {
            output = plant.output;
        }
        for (let i = 0; i < output; i++) {
            harvest.push(plant)
        }
    }
    return harvest;
};   