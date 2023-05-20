console.log("Welcome to the main module")
import { createPlan } from "./plan.js";
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';
import { catalog } from './catalog.js';
import { usePlants } from './field.js';

const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);
const harvest = harvestPlants(usePlants());
const inventory = catalog(harvest);
const parentHTMLElement = document.querySelector("main");
parentHTMLElement.innerHTML = inventory.join("\n");