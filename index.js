// Code your solution here
function findMatching(drivers, name){
    let driverList = drivers.filter(function(driver){
        return driver.toLowerCase() === name.toLowerCase();
    });
    return driverList;
}

function fuzzyMatch(drivers, letter){
    let driverList = drivers.filter(function(driver){
        return driver.toLowerCase().startsWith(letter.toLowerCase());
    });
    return driverList;
}

function matchName(drivers, name){
    let driverList = drivers.filter(function(driver){
        return driver.name.toLowerCase() === name.toLowerCase();
    });
    return driverList;
}
