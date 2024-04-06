// Function to check if a string is empty or contains only spaces
function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}

// Function to display the error message
function displayErrorMessage(message) {
    var errorDiv = document.getElementById('errors');
    errorDiv.style.color = 'red';
    errorDiv.style.textAlign = "center";
    errorDiv.innerHTML = message;

}
function clearMesssage () {
    var errorDivs = document.getElementById('errors');
    for (var i = 0; i < errorDivs.length; i++) {
        errorDivs[i].innerHTML = '';
    } 
}
function validateForm(event) {
    
    var date = document.getElementById('selectDate').value;
    var time = document.getElementById('selectTime').value;
    var visitors = document.getElementById('visitors').value;
    
    clearMesssage ()
    
    if (isEmptyOrSpaces(date) || isEmptyOrSpaces(time) || isEmptyOrSpaces(visitors)) {
        displayErrorMessage('Data not completed; please re-enter');
        return false;
    }
    
    if (visitors%1 !== 0 || isNaN(visitors) || parseInt(visitors) < 1 ) {
        displayErrorMessage('Please enter a valid number of people!');
        return false;
    }
    clearMesssage ()
    var reservationResult = reserve(date, time, parseInt(visitors));
    if (reservationResult) {
        alert('Your reservation is successful!');
        errorDiv.innerHTML = '';
    } else {
        alert('Sorry, the reservation is full!');
        errorDiv.innerHTML = '';
    }
    event.preventDefault()
    clearMesssage ()
    return false;
}
