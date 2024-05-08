// Task 1

function getGrade(score) {
    if (score > 90 && score <= 100) {
        return 'A';
    } else if (score > 80 && score <= 90) {
        return 'B';
    } else if (score > 70 && score <= 80) {
        return 'C';
    } else if (score > 60 && score <= 70) {
        return 'D';
    } else if (score >= 0 && score <= 60) {
        return 'F';
    } else {
        return "Invalid Score!";
    }
}

document.getElementById("score").addEventListener("click", () => {
    const resultDiv = document.getElementById("result");
    const screInput = document.getElementById("grade").value;
    const myScore = parseInt(screInput, 10);

    if (isNaN(myScore) || myScore < 0 || myScore > 100) {
        resultDiv.innerText = "Please enter a valid score between 0 and 100.";
        resultDiv.style.color = "red";
        document.getElementById("grade").value = '';
        return;
    } else {
        const grade = getGrade(myScore);
        resultDiv.innerText = `Grade: ${grade}`;

        switch (grade) {
            case 'A':
                resultDiv.style.color = "green";
                break;
            case 'B':
                resultDiv.style.color = "blue";
                break;
            case 'C':
                resultDiv.style.color = "orange";
                break;
            case 'D':
                resultDiv.style.color = "purple";
                break;
            case 'F':
                resultDiv.style.color = "red";
                break;
            default:
                resultDiv.style.color = "black";
                break;
        }
    }
});

//-------------------------------------------------------------------------------------------------

// Task 2

function convertTo12Hour(time24){
    const parts = time24.split(':');
    const hoursNum = parseInt(parts[0], 10);
    const minutesNum = parseInt(parts[1], 10);
    const period = hoursNum >= 12 && minutesNum > 0 ? 'PM' : 'AM';
    let hours12 = hoursNum % 12;
    if (hoursNum === 12) {
        hours12 = 12;
    }
    return `${hours12}:${minutesNum < 10 ? '0' + minutesNum : minutesNum} ${period}`;
}

function isValid24HourTime(time) {
    const parts = time.split(':');
    
    if (parts.length !== 2) {
        return false;
    }

    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);

    if (isNaN(hours) || isNaN(minutes)) {
        return false;
    }

    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return false;
    }

    return true;
}

document.getElementById("time_enter").addEventListener("click", ()=> {
    const timeInput = document.getElementById("time").value;
    const resultDiv = document.getElementById("result_time"); 

    if (isValid24HourTime(timeInput)) {
        const convertedTime = convertTo12Hour(timeInput);
        resultDiv.innerText = `Converted Time: ${convertedTime}`;
        resultDiv.style.color = "black";
    } else {
        resultDiv.innerText = "Invalid time format. Please enter time in HH:MM format";
        resultDiv.style.color = "red";
        document.getElementById("time").value = '';
        return;
    }
});


//---------------------------------------------------------------------------------------------

// Task 3

function checkPasswordStrength(password) {
    const length = password.length;
    if (length < 8) {
        return "Weak";
    } else if (length >= 8 && length <= 12) {
        return "Medium";
    } else if (length > 12) {
        const hasDigits = /\d/.test(password);
        const hasLower = /[a-z]/.test(password);
        const hasUpper = /[A-Z]/.test(password);
        if (hasDigits && hasLower && hasUpper) {
            return "Strong";
        }
    }
}

document.getElementById("password_enter").addEventListener("click", ()=> {
    const resultDiv = document.getElementById("result_password"); 
    const password = document.getElementById("myPassword").value;
    const strength = checkPasswordStrength(password);

    resultDiv.innerText = `Password Strength: ${strength}`;

    switch (strength) {
        case "Weak":
            resultDiv.style.color = "red";
            break;
        case "Medium":
            resultDiv.style.color = "orange";
            break;
        case "Strong":
            resultDiv.style.color = "green";
            break;
        default:
            break;
    }
});

//---------------------------------------------------------------------------------------------

// Task 4

function getDayName(dayIndex) {
    const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return dayNames[dayIndex - 1];
}

const resultDisplay = document.getElementById("result_weekday");

document.getElementById("weekday_enter").addEventListener("click", ()=> {
    const dayOfWeekSelect = document.getElementById("dayOfWeek");
    const dayIndex = dayOfWeekSelect.value;
    const dayName = getDayName(dayIndex);
    
    resultDisplay.innerText = `Day of the Week: ${dayName}`;
});

//---------------------------------------------------------------------------------------------

// Task 5

function calculateTaxiFare(distance, waitingTime) {
    const baseFare = 5;
    const perKilometeraAddfee= 0.5;
    const waitingTimeAddfee = 1;
    const waitingTimeCharge = Math.floor(waitingTime / 3) * waitingTimeAddfee;

    const distanceCharge = distance * perKilometeraAddfee;
    const totalFare = baseFare + distanceCharge + waitingTimeCharge;

    return totalFare;
}

document.getElementById("fare_enter").addEventListener("click", ()=> {
    const fareResultDisplay = document.getElementById("result_fare");
    const distanceInput = document.getElementById("distance");
    const waitingTimeInput = document.getElementById("wait_time");

    const distance = parseFloat(distanceInput.value);
    const waitingTime = parseFloat(waitingTimeInput.value);
    const fare = calculateTaxiFare(distance, waitingTime);
    fareResultDisplay.innerText = `The total taxi fare is: $${fare.toFixed(2)}`;
});