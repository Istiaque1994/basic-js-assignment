// git link

/*--------------------------------------------------------
            First Function Name - kilometerToMeter
---------------------------------------------------------*/

// Applying Function.
function kilometerToMeter(meter) {
    var kilometer = meter*1000; //formula of kilometer to meter.

    if (meter >= 0) {
        return + kilometer; // If the value is positive.
    } 
    else {
        return "Input can't be less than zero"; // If the value is negative.
    }
}

var convertResult = kilometerToMeter(10); //The place to give the value of kilometers.
console.log(convertResult);

// End First Function

/*-------------------------------------------------------
        Second Function Name - budgetCalculator
--------------------------------------------------------*/

// Applying Function.
function budgetCalculator(watch, mobile, laptop) {
    var totalPrice = watch*50 + mobile*100 + laptop*500; //formula to find out the total price.

    if (watch >= 0, mobile >= 0, laptop >= 0) {
        return + totalPrice; // If the value is positive.
    }
    else {
        return "Input can't be less than zero"; // If the value is negative.
    }
}

var budget = budgetCalculator(-1,0,0) //The first number is watch, the second number is mobile and the third number is laptop.
console.log(budget);

// End Second Function

/*-------------------------------------------------------
        Third Function Name - hotelCost
--------------------------------------------------------*/

// Applying Function.


// End Third Function

/*-------------------------------------------------------
        Fourth Function Name - megaFriend
--------------------------------------------------------*/

var frndNames = ["Istiauqe", "Ahmed", "Tazvir"]; // Friends name array

// Applying Function.
function megaFriend(nameArray) {
    var max = nameArray[0];

    if (nameArray.length > 0) {
        for (var i = 0; i > nameArray.length; i++) {
            var element = nameArray[i];
            if (element > max) {
                max = element;
            }
        }
        return max;
    } else {
        return "Please enter names in array"; // If there is no friends name array.
    }

}

console.log(megaFriend(frndNames));

// End Fourth Function