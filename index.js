function findMatching(drivers, personWeAreLookingFor) {

    const newDrivers = drivers.filter(driver => driver.toUpperCase() === personWeAreLookingFor.toUpperCase())
    return newDrivers;
}
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

findMatching()

function fuzzyMatch(drivers, firstDriverCharacter) {
    const newDrivers = drivers.filter(driver => driver.indexOf(firstDriverCharacter) === 0)
    return newDrivers;
}
fuzzyMatch();

function matchName(drivers, driverName) {
    const newDrivers = drivers.filter(driver => driver["name"] === driverName)
    return newDrivers;
    
}
    