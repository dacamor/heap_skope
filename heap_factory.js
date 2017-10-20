const ContainerGenerator = function () {
    let currentContainer = 1
    const maximumContainers = 30
    let result = []

    while (currentContainer <= maximumContainers) {
         result.push({ "id": currentContainer, "type": "mineral", "gems": [] })
        currentContainer++
    }

    return result
}