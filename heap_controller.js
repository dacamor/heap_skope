const gemHeapSkope = function () { // No parameter needed
	// Resource contained inside


	/*
	The gem mine does not exist outside the barricade of the
	hëap-skopes. The Lexscopistanians build the barricade
	around their facility AND the resource.
	
	a.k.a.
	Instead of being located in an outer scope to the
	function, the gem mine is enclosed by the scope of
	the `gemHeapSkope` function.
	*/
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

	/*
	Instead of processing the entirety of the resources in
	bulk - which is what the stâck-skope does - this skope
	will return an object that has a method for processing
	each type of mineral.
	
	We're exposing the functionality of this skope to code
	in the outer scope, so that the order in which minerals
	are processed can be customized.
	
	Hëap-skopes workshops can process 5 kilograms of a
	mineral with each work order. So every time the `process`
	function is invoked, subtract 5 from the amount of the
	requested mineral from the enclosed GemMine above.
	*/
	return {
		"processMine": function () {
			/*
			Subtract 5 from the total kilograms available in
			the gem mine, but make sure you stop when there
			are no minerals left.
			*/

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
	if (containerNum > storageContainers.length)
	{
		break;
	}

	//get next processed gem
	processedGems = SkopeManager.processMine()
}

/*
Create 30 storage containers, which is how many a hëap-skope
is equipped with.
*/


/*
Place the gems in the storage containers, making sure that
once a container has 565 kilograms of gems, you move to the
next one.
*/