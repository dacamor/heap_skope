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
			if ( GemMine.requestedMineral.kilograms >= 5 ) {
				GemMine.requestedMineral.kilograms = GemMine.requestedMineral.kilograms - 5
			}

			return {
				"mineral": requestedMineral,
				"amount": GemMine.requestedMineral.kilograms
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

while(SkopeManager.Onyx.kilograms > 0)
{
	SkopeManager.process(Onyx)
	storageContainers.gems.push(Onyx)
	if(storageContainers[containerNum].gems.length === 113)
	{
		containerNum++
	}
}
while (SkopeManager.Amethyst.kilograms > 0)
{
	SkopeManager.process(Amethyst)
	storageContainers.gems.push(Amethyst)
	if(storageContainers[containerNum].gems.length === 113)
	{
		containerNum++
	}
}
	
while (SkopeManager.Bloodstone.kilograms > 0)
{
	SkopeManager.process(Bloodstone)
	storageContainers.gems.push(Bloodstone)
	if(storageContainers[containerNum].gems.length === 113)
	{
		containerNum++
	}
}

while (SkopeManager.Emerald.kilograms > 0)
{
	SkopeManager.process(Emerald)
	storageContainers.gems.push(Emerald)
	if(storageContainers[containerNum].gems.length === 113)
	{
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