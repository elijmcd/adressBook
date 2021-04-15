// //take user input and print numbers to the page
// function printNumbers() {
//     let fizz = parseInt(document.getElementById("numFizz").value);
//     let buzz = parseInt(document.getElementById("numBuzz").value);

//     // declare variable 'fb' to store output 
//     let fb = fizzBuzz(fizz, buzz);
//     displayData(fb);
// }

// function fizzBuzz(fizzNum, buzzNum) {

//     let numbers = [];

//     for (let i = 1; i <= 100; i++) {
//         // let's fizz and buzz here
//         if (i % fizzNum == 0 && i % buzzNum == 0) {
//             numbers.push("!fZZbZZ!");
//             // if (i == 77) {
//             //     numbers.push("FUZZBIZZ");

//             //     return;
//             // }
//         } else if (i % fizzNum == 0) {
//             numbers.push("Fzz");
//         } else if (i % buzzNum == 0) {
//             numbers.push("Bzz");
//         } else {
//             numbers.push(i)
//         }
//     }
//     return numbers;
// }



// //display the nums on the page

// function displayData(numbers) {
//     const rowTemplate = document.getElementById("dataTemplate");
//     const resultBody = document.getElementById("resultBody");
//     let colCount = rowTemplate.content.cloneNode(true).querySelectorAll("td").length;
//     //ImportNode does same as clone, but import can get into a different doco than the one its on

//     //clear the table
//     resultBody.innerHTML = "";

//     //loop over every element in the array 'numbers'
//     //get the value and write it to the page
//     //first 'for' loops over rows
//     for (let rowIndex = 0; rowIndex < numbers.length; rowIndex += colCount) {
//         let dataRow = rowTemplate.content.cloneNode(true);

//         //returns an array of cols from the template
//         let cols = dataRow.querySelectorAll("td");

//         //inner 'for' loops over cols
//         for (let colIndex = 0; colIndex < cols.length; colIndex++) {
//             let value = numbers[rowIndex + colIndex];
//             // if (typeof value === "undefined") {
//             //     value = "";
//             // } else if (value % 2 == 0) {
//             //     cols[colIndex].classList.add("boldIt")
//             // }
//             //NOTE: td's use 'textContent' to set their content
//             cols[colIndex].textContent = value;
//         }
//         //adds the row to the page
//         resultBody.appendChild(dataRow);
//     }

// }

var addressArray = [{
        name: "Eli McDougal",
        city: "Springfield",
        state: "MO",
        email: "eel@elusivesolutions.net",
        phone: "555-777-8888"
    },
    {
        name: "Ian McDougal",
        city: "Salt Lake City",
        state: "UT",
        email: "eel@elusivesolutions.net",
        phone: "555-777-8888"
    },
    {
        name: "Doug McDougal",
        city: "Eugene",
        state: "OR",
        email: "eel@elusivesolutions.net",
        phone: "555-777-8888"
    },
    {
        name: "Lynn McDougal",
        city: "Kennewick",
        state: "WA",
        email: "eel@elusivesolutions.net",
        phone: "555-777-8888"
    },
    {
        name: "Juli McDougal",
        city: "Springfield",
        state: "MO",
        email: "eel@elusivesolutions.net",
        phone: "555-777-8888"
    }
];

loadAddressBook();

function loadAddressBook() {
    let addressBook = [];
    addressBook = getData();
    displayData(addressBook);

}

function getData() {
    let addressBook = JSON.parse(localStorage.getItem("addressArray")) || [];

    if (addressBook.length == 0) {
        addressBook = addressArray;
        localStorage.setItem("addressArray", JSON.stringify(addressBook));
    }
    return addressBook;
}

function saveAddress() {
    //grab the events from local storage
    let addressBook = JSON.parse(localStorage.getItem("addressArray")) || addressArray;

    let obj = {};
    obj["name"] = document.getElementById("newName").value;
    obj["city"] = document.getElementById("newCity").value;
    obj["state"] = document.getElementById("newState").value;
    obj["email"] = document.getElementById("newEmail").value;
    obj["phone"] = document.getElementById("newPhone").value;

    addressBook.push(obj);

    localStorage.setItem("addressArray", JSON.stringify(addressBook));

    // access the values from the form by ID and add an object to the array
    displayData(addressBook);
}

function displayData(addressBook) {
    const template = document.getElementById("Data-Template");
    const resultsBody = document.getElementById("resultsBody");
    //clear table first
    resultsBody.innerHTML = "";
    for (let i = 0; i < addressBook.length; i++) {
        const dataRow = document.importNode(template.content, true);

        dataRow.getElementById("name").textContent = addressBook[i].name;
        dataRow.getElementById("city").textContent = addressBook[i].city;
        dataRow.getElementById("state").textContent = addressBook[i].state;
        dataRow.getElementById("email").textContent = addressBook[i].email;
        dataRow.getElementById("phone").textContent = formatPhoneNumber(addressBook[i].phone);

        resultsBody.appendChild(dataRow);
    }

}

function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
}