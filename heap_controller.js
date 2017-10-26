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
		"process": function (requestedMineral) {
			/*
			Subtract 5 from the total kilograms available in
			the gem mine, but make sure you stop when there
			are no minerals left.
			*/
			if (requestedMineral === "Onyx") {


				if (GemMine.Onyx.kilograms >= 5) {
					GemMine.Onyx.kilograms = GemMine.Onyx.kilograms - 5

					return {
						"mineral": requestedMineral,
						"amount": 5
					}
				} else {
					return {
						"mineral": requestedMineral,
						"amount": 0
					}
				}
			} else if (requestedMineral === "Amethyst") {
				if (GemMine.Amethyst.kilograms >= 5) {
					GemMine.Amethyst.kilograms = GemMine.Amethyst.kilograms - 5

					return {
						"mineral": requestedMineral,
						"amount": 5
					}
				} else {
					return {
						"mineral": requestedMineral,
						"amount": 0
					}
				}
			} else if (requestedMineral === "Bloodstone") {
				if (GemMine.Bloodstone.kilograms >= 5) {
					GemMine.Bloodstone.kilograms = GemMine.Bloodstone.kilograms - 5

					return {
						"mineral": requestedMineral,
						"amount": 5
					}
				} else {
					return {
						"mineral": requestedMineral,
						"amount": 0
					}
				}
			} else if (requestedMineral === "Emerald") {
				if (GemMine.Emerald.kilograms >= 5) {
					GemMine.Emerald.kilograms = GemMine.Emerald.kilograms - 5

					return {
						"mineral": requestedMineral,
						"amount": 5
					}
				} else {
					return {
						"mineral": requestedMineral,
						"amount": 0
					}
				}

			}
		}
	}
}

/*
The SkopeManager variable represents the object with the
`process` method on it.
*/
const SkopeManager = gemHeapSkope()

const storageContainers = ContainerGenerator()

let containerNum = 1
let currentContainer = {}

while (SkopeManager.process("Onyx").amount === 5) {
	currentContainer = storageContainers.filter(container => {
		const isCurrent = (container.id === containerNum)
		return isCurrent
	})
	currentContainer[0].gems.push("Onyx")
	if (currentContainer[0].gems.length === 113) {
		containerNum++
	}
}

while (SkopeManager.process("Amethyst").amount === 5) {
	currentContainer = storageContainers.filter(container => {
		const isCurrent = (container.id === containerNum)
		return isCurrent
	})
	currentContainer[0].gems.push("Amethyst")
	if (currentContainer[0].gems.length === 113) {
		containerNum++
	}
}

while (SkopeManager.process("Bloodstone").amount === 5) {
	currentContainer = storageContainers.filter(container => {
		const isCurrent = (container.id === containerNum)
		return isCurrent
	})
	currentContainer[0].gems.push("Bloodstone")
	if (currentContainer[0].gems.length === 113) {
		containerNum++
	}
}
while (SkopeManager.process("Emerald").amount === 5) {
	currentContainer = storageContainers.filter(container => {
		const isCurrent = (container.id === containerNum)
		return isCurrent
	})
	currentContainer[0].gems.push("Emerald")
	if (currentContainer[0].gems.length === 113) {
		containerNum++
	}
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