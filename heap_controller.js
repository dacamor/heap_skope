const gemHeapSkope = function () {
	const GemMine = {
		"Onyx": {
			"kilograms": 453
		},
		"Amethyst": {
			"kilograms": 453
		},
		"Bloodstone": {
			"kilograms": 453
		},
		"Emerald": {
			"kilograms": 453
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
const SkopeManager = gemHeapSkope()

const storageContainers = ContainerGenerator(30)	//array of available containers.  Parameter determines num of containers

let containerNum = 1			//id of current container
let currentContainer = {}		//current container
let processedGems = SkopeManager.processMine()

//Continue processing while there are more gems left.  processedGems.amount === 0 when the mine is empty
while (processedGems.amount === 5) {
	//Get currentContainer
	currentContainer = storageContainers.filter(container => {
		const isCurrent = (container.id === containerNum)
		return isCurrent
	})[0]

	//Add processed material to container
	currentContainer.gems.push(processedGems.mineral)

	//If container is full, increment to next container
	//A container holds 565 kg of gems
	if (currentContainer.gems.length === 113) {
		containerNum++
	}
	//If out of containers, stop execution
	if (containerNum > storageContainers.length) {
		break;
	}

	//get next processed gem
	processedGems = SkopeManager.processMine()
}
