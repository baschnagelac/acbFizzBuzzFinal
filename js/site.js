//get values from the user. we need to get fizz and buzz value.

function getValues() {
    //get user values from the page
    let fizzValue = document.getElementById('fizzValue').value;

    let buzzValue = document.getElementById('buzzValue').value;



    //check to make sure they're numbers - parse

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);


    //check to make sure they're integers

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        //call logic function -call fizzBuzz
        let fbArray = fizzBuzzC(fizzValue, buzzValue);
        //call displayData and write the values to the screen
        displayDataB(fbArray);
    } else {
        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: 'Only integers are allowed for Hundo!'
            }
        );
    }

}

function fizzBuzz(fizzValue, buzzValue) {

    let returnArray = [];
    //initialize the returnArray


    //loop from 1-stop value
    // for (let i = 1; i <= stopValue; i++) {


    //     if (i % fizzValue == 0 && i % buzzValue == 0) {
    //         returnArray.push('FizzBuzz');
    //     } else if (i % fizzValue == 0) {
    //         returnArray.push('Fizz');
    //     } else if (i % buzzValue == 0) {
    //         returnArray.push('Buzz');
    //     } else {
    //         returnArray.push(i);
    //     }


    // }

    for (let i = 1; i <= 100; i++) {
        let value = i;

        if (value % fizzValue == 0 && value % buzzValue == 0) {
            value = 'FizzBuzz';
        } else if (value % buzzValue == 0) {
            value = 'Buzz';
        } else if (value % fizzValue == 0) {
            value = 'Fizz';
        }
        returnArray.push(value);
    }

    return returnArray;
}

function displayData(fbArray) {

    //loop over array and create a tablerow for each item

    //get the table body element from the page
    let tableBody = document.getElementById('results');


    //get the template row

    let templateRow = document.getElementById('fbTemplate');

    //clear the table first
    tableBody.innerHtml = "";

    for (let index = 0; index < fbArray.length; index += 5) {
        let tableRow = document.importNode(templateRow.content, true);

        //grab the tds to put into array 
        let rowCols = tableRow.querySelectorAll('td');

        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index + 1];

        rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index + 2];

        rowCols[3].classList.add(fbArray[index + 3]);
        rowCols[3].textContent = fbArray[index + 3];

        rowCols[4].classList.add(fbArray[index] + 4);
        rowCols[4].textContent = fbArray[index + 4];

        tableBody.appendChild(tableRow);

    }

}

function fizzBuzzB(fizzValue, buzzValue) {
    let returnArray = [];
    let Fizz = false;
    let Buzz = false;

    for (let i = 1; i <= 100; i++) {

        Fizz = i % fizzValue == 0;
        Buzz = i % buzzValue == 0;

        switch (true) {
            case Fizz && Buzz: {
                returnArray.push('FizzBuzz');
                break;
            }
            case Fizz: {
                returnArray.push('Fizz');
                break;
            }
            case Buzz: {
                returnArray.push('Buzz');
                break;
            }
            default: {
                returnArray.push(i);
                break;
            }
        }
    }




    return returnArray;
}


function fizzBuzzC(fizzValue, buzzValue) {
    let returnArray = [];

    for (let i = 1; i <= 100; i++) {
        let value = ((i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz' : '') || i);
        returnArray.push(value);
    }
    return returnArray;
}


function displayDataB(fbArray) {
    let resultsDiv = document.getElementById('results');

    let resultsHtml = '';

    for (let i = 0; i < fbArray.length; i++) {
        let returnArray = fbArray[i];
        let className = '';

        if (returnArray == 'FizzBuzz') {
            className = 'FizzBuzz';
        } else if (returnArray == 'Buzz') {
            className = 'Buzz';
        } else if (returnArray == 'Fizz') {
            className = 'Fizz';
        }

        resultsHtml += `<div class="col ${className}">${returnArray}</div>`;

    }
    resultsDiv.innerHTML = resultsHtml;
}

function displayDataC(fbArray) {
    let tableBody = document.getElementById('results');

    let tableHtml = "";

    for (let i = 1; i < fbArray.length; i++) {
        let returnArray = fbArray[i];
        let className = '';

        if (returnArray == 'FizzBuzz') {
            className = 'FizzBuzz';
        } else if (returnArray == 'Buzz') {
            className = 'Buzz';
        } else if (returnArray == 'Fizz') {
            className = 'Fizz';
        } else {
            className = '';
        }

        if (i - 1 % 5 == 0) {
            tableHtml += ''
        }

        let tableRow = `${returnArray}`

        tableHtml += tableRow;

        if ((i) % 5 == 0) {
            tableHtml += '';
        }
    }
    tableBody.innerHTML = tableHtml;
}