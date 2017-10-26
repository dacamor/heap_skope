const ContainerGenerator = function (max = 30) {
    let currentContainer = 1
    const maximumContainers = max
    let result = []

    while (currentContainer <= maximumContainers) {
         result.push({ "id": currentContainer, "type": "mineral", "gems": [] })
        currentContainer++
    }

    return result
}