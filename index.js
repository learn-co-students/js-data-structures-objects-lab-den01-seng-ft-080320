// Write your solution in this file!
const driver = {
    name: 'Sam',
    address: '11 Broadway'
}
// console.log(driver)

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = { ...driver }
    newDriver[key] = value
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    return Object.keys(driver)
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}