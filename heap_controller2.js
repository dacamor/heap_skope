const gemHeapSkope2 = function () {
	const GemMine = {
		"Coal": {
			"kilograms": 5302
		},
		"Gold": {
			"kilograms": 2775
		}
	}

	return {
		"processMine": function () {

			for (let key in GemMine) {

				if (GemMine[key].kilograms >= 5) {
					GemMine[key].kilograms = GemMine[key].kilograms - 5

					return {
						"mineral": key,
						"amount": 5
					}
				}
			}
			return {
				"mineral": null,
				"amount": 0
			}
		}
	}
}

/*
The SkopeManager variable represents the object with the
`process` method on it.
*/
const SkopeManager2 = gemHeapSkope2()

const storageContainers2 = ContainerGenerator(30)	//array of available containers.  Parameter determines num of containers

let containerNum2 = 1			//id of current container
let currentContainer2 = {}		//current container
let processedGems2 = SkopeManager2.processMine()

//Continue processing while there are more gems left.  processedGems.amount === 0 when the mine is empty
while (processedGems2.amount === 5) {
	//Get currentContainer
	currentContainer2 = storageContainers2.filter(container => {
		const isCurrent = (container.id === containerNum2)
		return isCurrent
	})[0]

	//Add processed material to container
	currentContainer2.gems.push(processedGems2.mineral)

	//If container is full, increment to next container
	//A container holds 565 kg of gems
	if (currentContainer2.gems.length === 113) {
		containerNum2++
	}
	//If out of containers, stop execution
	if (containerNum2 > storageContainers2.length) {
		break;
	}

	//get next processed gem
	processedGems2 = SkopeManager2.processMine()
}
const gemHeapSkope3 = function () {
	const GemMine = {
		"Iron": {
			"kilograms": 3928
		},
		"Copper": {
			"kilograms": 901
		}
	}

	return {
		"processMine": function () {

			for (let key in GemMine) {

				if (GemMine[key].kilograms >= 5) {
					GemMine[key].kilograms = GemMine[key].kilograms - 5

					return {
						"mineral": key,
						"amount": 5
					}
				}
			}
			return {
				"mineral": null,
				"amount": 0
			}
		}
	}
}

/*
The SkopeManager variable represents the object with the
`process` method on it.
*/
const SkopeManager3 = gemHeapSkope3()

const storageContainers3 = ContainerGenerator(30)	//array of available containers.  Parameter determines num of containers

let containerNum3 = 1			//id of current container
let currentContainer3 = {}		//current container
let processedGems3 = SkopeManager3.processMine()

//Continue processing while there are more gems left.  processedGems.amount === 0 when the mine is empty
while (processedGems3.amount === 5) {
	//Get currentContainer
	currentContainer3 = storageContainers3.filter(container => {
		const isCurrent = (container.id === containerNum3)
		return isCurrent
	})[0]

	//Add processed material to container
	currentContainer3.gems.push(processedGems3.mineral)

	//If container is full, increment to next container
	//A container holds 565 kg of gems
	if (currentContainer3.gems.length === 113) {
		containerNum3++
	}
	//If out of containers, stop execution
	if (containerNum3 > storageContainers3.length) {
		break;
	}

	//get next processed gem
	processedGems3 = SkopeManager3.processMine()
}
