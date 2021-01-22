//1. Kilometer To Meter Measurement //

function kilometerToMeter(km) {
    var meter = km * 1000;
    if (km >= 1) {
        return meter;
    } else {
        return "Something went wrong , Please try again"
    }
}

var result = kilometerToMeter(5);
console.log(result);





//2. Budget Calculator //

function budgetCalculator(watch, phone, laptop) {
    var cart1 = watch * 50;
    var cart2 = phone * 100;
    var cart3 = laptop * 500;
    var totalAmount = cart1 + cart2 + cart3;
    if (cart1 > 1 && cart2 > 1 && cart3 > 1) {
        return totalAmount;
    } else {
        return "You have entered an invalid number, Please try again"
    }
}

var myBudget = budgetCalculator(4, 2, 1);
console.log(myBudget);





//3. Hotel Cost //

function hotelCost(stay) {
    var totalFee = 0;
    if (stay <= 10) {
        var offer1 = stay * 100;
        totalFee = offer1;
    } else if (stay <= 20) {
        var offer1 = 10 * 100;
        var other = stay - 10;
        var offer2 = other * 80;
        totalFee = offer1 + offer2;
    } else {
        var offer1 = 10 * 100;
        var offer2 = 10 * 80;
        var other = stay - 20;
        var offer3 = other * 50;
        totalFee = offer1 + offer2 + offer3;
    }
    return totalFee;
}

var billAmount = hotelCost(27);
console.log(billAmount);





//4. Mega Friends //

function megaFriend(large) {
    var names = 0;
    for (var i = 0; i < large.length; i++) {
        if (names < large[i].length) {
            names = large[i].length;
            var result = large[i]
        }
    }
    return result;
}

var all = ["Robiul", "Nirob", "Emon", "Akteruzzaman", "Rakib"];
var bigNameIs = megaFriend(all);
console.log(bigNameIs);