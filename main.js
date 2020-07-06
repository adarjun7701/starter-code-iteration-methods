// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.


// Append the katas to this element:

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}


const main = document.querySelector('main')



//kata1:

const active = users.filter(user => user.isActive === true);


// kata2
const emails = users.map(user => user.email);


// kata 3
const companyPropertyLookup = (company) => company === "OVATION";
const matchedCompanyUsers = users.some(user => companyPropertyLookup(user.company));



// Kata 4
const firstUserOver38 = users.find( function (user) {
    return user.age > 38
})



//Kata 5
const activeUser =  users.filter(user => user.isActive === true)
const activeUsersOver38 = activeUser.find(user => user.age > 38);


// Kata 6
const zencoUsers = users.filter(user => user.company === "ZENCO").map(user => user.balance);



// Kata 7 
const fugiatUsers = users.filter(user => user.tags.includes("fugiat")).map(user => user.age);




printKata(1, active)
printKata(2, emails)
printKata(3, matchedCompanyUsers)
printKata(4, firstUserOver38)
printKata(5, activeUsersOver38)
printKata(6, zencoUsers)
printKata(7, fugiatUsers)


