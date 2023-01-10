/* Your Code Here */

function createEmployeeRecord(array) {
    let employeeRecord = {}
    return employeeRecord = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: parseInt(array[3]),
        timeInEvents: [],
        timeOutEvents: []
    }
}


function createEmployeeRecords(arrays) {
    return arrays.map(array => createEmployeeRecord(array))
}

function createTimeInEvent(dateStamp) {
    this.timeInEvents = [{
        type: "TimeIn",
        date: dateStamp.slice(0, 10),
        hour: parseInt(dateStamp.slice(11))
    }]
    return this
}

function createTimeOutEvent(dateStamp) {
    this.timeOutEvents = [{
        type: "TimeOut",
        date: dateStamp.slice(0, 10),
        hour: parseInt(dateStamp.slice(11))
    }]
    return this
}

function hoursWorkedOnDate(givenDate) {
    const timeIn = this.timeInEvents.find((e) => {
        return e.date === givenDate
      });
    
      const timeOut = this.timeOutEvents.find((e) => {
        return e.date === givenDate
      });
    
      return (timeOut.hour - timeIn.hour) / 100;
    }


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

