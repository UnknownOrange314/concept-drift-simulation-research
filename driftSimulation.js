//Standard deviation method from here: https://stackoverflow.com/questions/7343890/standard-deviation-javascript
function getStandardDeviation (array) {
  const n = array.length
  const mean = array.reduce((a, b) => a + b) / n
  return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}

function getAverage(array) {
	let total = 0;
  for(let i=0;i<array.length;i++){
  	total+=array[i];
  }
  return total/array.length;
}

const updateRange = 1;

const data = new Array(0,0);
const updateOptions = new Array(0,1);

//Measurement of complexity needed to maintain level of quality.
const complexityMap = {0: 1, 1: 1}

for(let i =0; i<1000; i++) {
	const dataSize = data.length;
   
  const updateCopy = [...updateOptions];

	const a = Math.floor(Math.random()*dataSize)
  const indexA = updateCopy[a];
  
  const b = Math.floor(Math.random()*(dataSize -1));
  
  
  updateCopy.splice(indexA,1);
  const indexB = updateCopy[b];
  
  const itemA = data[indexA];
  const itemB = data[indexB];
  
  const changeFactor = Math.random()*0.5-1;
  const itemAWeight = Math.random();
  const itemBWeight = 1-Math.random();
  
  const itemToAdd = (itemA * itemAWeight + itemB * itemBWeight) + changeFactor
  
  const differenceFactor = 1+Math.abs(itemA-itemB);

  const newComplexity = (complexityMap[indexA]*itemAWeight + complexityMap[indexB]*itemBWeight)*differenceFactor;
  
  complexityMap[updateOptions.length] = newComplexity;
  data.push(itemToAdd);
  
  updateOptions.push(updateOptions.length);
  console.log("Logic variation:"+getStandardDeviation(data))
  console.log("Average complexity:"+getAverage(Object.values(complexityMap)))
}

