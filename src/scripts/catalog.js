export const catalog = (harvest) => {
    let inventory = harvest.map(plant => {
        return `<section class="plant">${plant.type}</section>`
    })
    return inventory;
};