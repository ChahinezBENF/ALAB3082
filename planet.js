//part 1//
console.log('****PART 1: Growing Pains****');
console.log('*****************************');
const radius = 5;
const PI = 3.1414;
const area = PI * radius * radius;
const eachPlantSpace = 0.8;
let plantNumberStart = 20;

//the capacity of the garden
const GardenCapacity = area / eachPlantSpace;
//console.log(GardenCapacity);

// 1 week
console.log (`********Week 1*******`);
let week = 1;
let predictGrowth = plantNumberStart * (2**week);
//plantNumberStart = predictGrowth;
let growPlant = (predictGrowth*100)/GardenCapacity;
//console.log(predictGrowth);

switch (true) {
    case growPlant > 80 : 
    console.log (`Prune plant after week : ${week}.`);
        break;
    case growPlant >= 50 && growPlant <= 80:
        console.log(`Monitor the plant after week : ${week}`);
        break;
    case growPlant < 50:
    console.log(`plant more after week : ${week}. `);
        break;
    default:
        console.log('Error ');
        break;
 }

 console.log (`********Week 2*******`);

 week = 2;
predictGrowth = plantNumberStart *(2**week);
//plantNumberStart = predictGrowth;
//console.log(predictGrowth);
growPlant = (predictGrowth*100)/GardenCapacity;
//console.log(growPlant);

switch (true) {
    case growPlant > 80 : 
    console.log (`Prune plant after week : ${week}.`);
        break;
    case growPlant >= 50 && growPlant <= 80:
        console.log(`Monitor the plant after week : ${week}`);
        break;
    case growPlant < 50:
    console.log(`plant more after week : ${week}. `);
        break;
    default:
        console.log('Error ');
        break;
 }

 console.log (`********Week 3*******`);

 week = 3;
 predictGrowth = plantNumberStart * (2**week);
 //plantNumberStart = predictGrowth;
 //console.log(predictGrowth);
 growPlant = (predictGrowth*100)/GardenCapacity;
 //console.log(growPlant);
 
 switch (true) {
    case growPlant > 80 : 
    console.log (`Prune plant after week : ${week}.`);
        break;
    case growPlant >= 50 && growPlant <= 80:
        console.log(`Monitor the plant after week : ${week}`);
        break;
    case growPlant < 50:
    console.log(`plant more after week : ${week}. `);
        break;
    default:
        console.log('Error ');
        break;
  }


  //part 2//
  {
    console.log('****PART 2: Thinking Bigger****');
  console.log('*****************************');

week = 10;
plantNumberStart = 100;


predictGrowth = plantNumberStart * (2**week);

console.log(`Predict the plant growth after ${week} weeks is : ${predictGrowth}`);

let spaceNeeded = predictGrowth * eachPlantSpace;
console.log(`Space needed after  ${week} weeks is : ${spaceNeeded} m^2`);

//for the new raduis i had to use the  avaScript function  that returns the square root
let newRaduis = Math.sqrt(spaceNeeded / PI);
console.log(` The radius of this expanded garden : ${newRaduis} m`);

  }

//part 3//
console.log('****PART 3: Errors in Judgement****');
console.log('*****************************');





try {

    const GardenCapacity = area / eachPlantSpace;
    const plantNumberStart = 100;
    let week = 0;
    
    if (plantNumberStart <=  GardenCapacity) {
        const predictGrowth = plantNumberStart *(2**week);

        const growPlant = (predictGrowth*100)/GardenCapacity;

        switch (true) {
        case growPlant > 80 : 
        console.log (`Prune plant after week : ${week}.`);
        break;
        case growPlant >= 50 && growPlant <= 80:
        console.log(`Monitor the plant after week : ${week}`);
        break;
        case growPlant < 50:
        console.log(`plant more after week : ${week}. `);
        break;
         default:
        console.log('Error ');
        break;
           }
    } else {
        throw "Error - the amount of space required to hold the originally provided number of plants exceeds the amount of space available.";
    }
} catch (error) {
	console.log(error);
}

