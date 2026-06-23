const Log = require("./logger");

const {
    getDepots,
    getVehicles
} = require("./apiService");

const knapsack = require("./scheduler");

async function main() {

    try {

        await Log(
            "backend",
            "info",
            "handler",
            "Vehicle scheduler started"
        );

        const depots = await getDepots();

        const vehicles = await getVehicles();

        for (const depot of depots) {

            const result = await knapsack(
                vehicles,
                depot.MechanicHours
            );

            console.log("\n====================");

            console.log(
                `Depot ID: ${depot.ID}`
            );

            console.log(
                `Mechanic Hours: ${depot.MechanicHours}`
            );

            console.log(
                `Maximum Impact: ${result.maxImpact}`
            );

            console.log(
                `Selected Vehicles: ${result.selectedVehicles.length}`
            );

            await Log(
                "backend",
                "info",
                "service",
                `Completed depot ${depot.ID}`
            );
        }

    } catch (error) {

        await Log(
            "backend",
            "error",
            "handler",
            error.message
        );

        console.log(error.message);
    }
}

main();