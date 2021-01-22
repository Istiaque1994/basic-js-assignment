// https://github.com/Istiaque1994/basic-js-assignment

/*--------------------------------------------------------
            First Function Name - kilometerToMeter
---------------------------------------------------------*/

// Applying Function.
function kilometerToMeter(meter) {
    var kilometer = meter*1000; //formula of kilometer to meter.

    if (meter >= 0) {
        return kilometer; // If the value is uprer than zero
    } 
    else {
        return "Input can't be less than zero"; // If the value is less than zero.
    }
}

var convertResult = kilometerToMeter(10); //The place to give the value of kilometers.
console.log(convertResult);


/*-------------------------------------------------------
        Second Function Name - budgetCalculator
--------------------------------------------------------*/

// Applying Function.
function budgetCalculator(watch, mobile, laptop) {
    var totalPrice = watch*50 + mobile*100 + laptop*500; //formula to find out the total price.

    if (watch >= 0 && mobile >= 0 && laptop >= 0) {
        return totalPrice; // If the value is uper than zero.
    }
    else {
        return "Input can't be less than zero"; // If the value is less than zero.
    }
}

var budget = budgetCalculator(1,0,0) //The first number is watch, the second number is mobile and the third number is laptop.
console.log(budget);


/*-------------------------------------------------------
        Third Function Name - hotelCost
--------------------------------------------------------*/

// Applying Function.
function hotelCost(perNight) {

    // If there is no valid day.
    if (perNight < 1) {
        return "Please enter a valid day";
    }
    
    // 1 to 10 days condition.
    else if (perNight >= 1 && perNight <= 10) {
        return perNight * 100;
    }

    // 11 to 20 days condition.
    else if (perNight >= 11 && perNight <= 20) {
        return (10 * 100) + (perNight - 10) * 80;
    }

    // 21 to the rest of the day's condition.
    else {
        return (10 * 100) + (10 * 80) + (perNight - 20) * 50;
    }
}

var totalNight = hotelCost(10);
console.log(totalNight);


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
    }
    else {
        return "Please enter names in array"; // If there is no friends name array.
    }

}

console.log(megaFriend(frndNames));