function saturdayFun(activitySat = "roller-skate") {
    let planSat = `This Saturday, I want to ${activitySat}!`;
    return planSat;
}

function mondayWork(activityMon = "go to the office") {
    let planMon = `This Monday, I will ${activityMon}.`;
    return planMon;
}

function wrapAdjective(visualFlair = "*") {
    return function(adjective = "special") {
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
}