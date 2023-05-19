export const harvestPlants = (sownField) => {
    let harvest = [];
    for (const plant of sownField) {
        for (let i = 0; i < plant.output; i++) {
            harvest.push(plant);
        }
    }
    return harvest;
};   