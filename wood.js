// Calculate a wood chair table and bed

function woodValue(chairQuenty, tableQuenty, bedQuenty){
    const perChairWood = 3;
    const perTableWood = 7;
    const perBedWood = 35;

    // Chair wood
    const totalChairWood = chairQuenty * perChairWood;
    // table wood
    const totalTableWood = tableQuenty * perTableWood;
    // Bed wood
    const totalBedWood = bedQuenty * perBedWood;
    // Total wood
    const totalWood = totalChairWood + totalTableWood + totalBedWood;

    return totalWood;
}

// Call the function

const totalWood = woodValue(5, 1, 2);
console.log('Total wood for making ferniture :', totalWood, ' cft wood');