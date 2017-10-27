const logContainerFactory = logContainerGenerator()

let theForrest = [
	{
		"type": "Oak",
		"trees": 9
	},
	{
		"type": "Pine",
		"trees": 12
	},
	{
		"type": "Ash",
		"trees": 6
	},
	{
		"type": "Balsa",
		"trees": 10
	}
]

const logStackSkope = function (aForrest) {

	const processedTrees = []
	for (let key in aForrest) {

		processedTrees.push({
			"type": aForrest[key].type,
			"logs": Math.floor(aForrest[key].trees * 4)
		})
	}

	return processedTrees
}


logContainers = []


let allLogs = logStackSkope(theForrest)



// Open the first container
let curContainer = logContainerFactory.next().value

// Iterate over the `allLogs` array
allLogs.forEach(

    // Look at each processed tree object
    currentTree => {

        // Do a `for` loop that iterates up to number of logs
        for (let i = 0; i < currentTree.logs; i++) {

            // Insert a new object into a storage container
            const log = {"type": currentTree.type}
            curContainer.logs.push(log)

            // Once capacity is reached, use next storage container
            if (curContainer.logs.length === 15) {
                logContainers.push(curContainer)
                curContainer = logContainerFactory.next().value
            }
        }
    }
)


if (curContainer.logs.length > 0) {
    logContainers.push(curContainer)
}
