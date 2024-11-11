import getParticipant from "./register.mjs";

var i = 1;

function onAddButtonClick() {
	i += 1;
	add.insertAdjacentHTML('beforebegin', getParticipant(i));	
}

add.addEventListener('click', onAddButtonClick);
submitButton.addEventListener('click', submitForm);

function submitForm(event) {
    event.preventDefault();
    // do the rest of the stuff
    let item = document.querySelector("[id^=adult_name]");
    let name = item.value;
    summary.insertAdjacentHTML('afterbegin', getSummary(name, i, totalFees()));
    input_form.style.display = "none";
}

function getSummary(info, num, fees){
    return `<legend>Summary</legend>
    <ol>
        <li>Primary Contact: ${info}</li>
        <li>Number of Participants: $${num}</li>
        <li>Total Fees: ${fees}</li>
    </ol>`;
}

function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];

    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    let sum = 0;
    feeElements.forEach((fee) => {
        sum += parseFloat(fee.value)
    });
    
    // once you have your total make sure to return it!
    console.log(sum);
    return sum;
}