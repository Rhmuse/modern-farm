console.log("Welcome to the main module")
import { createPlan } from "./plan.js";
import { tractor } from './tractor.js';
import { harvestPlants } from './harvester.js';
import { catalog } from './catalog.js';

const yearlyPlan = createPlan();
const sownfield = tractor(yearlyPlan);
const harvest = harvestPlants(sownfield);
const inventory = catalog(harvest);
const parentHTMLElement = document.querySelector("main");
parentHTMLElement.innerHTML = inventory.join("\n");