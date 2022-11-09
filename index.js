function reverseString(str) {
    var listOfChar = str.split(''); //Output looks like 'a','b','c'
    var reversedListOfChar = listOfChar.reverse();
    var reversedChar = reversedListOfChar.join('');
    return reversedChar;
}



function isPalindrome(str) {
    var reverseStr = reverseString(str);
    return str = reverseStr;
}


//covert date into string

function convertDateToStr(date) {

    var dateStr = {
        day: '',
        month: '',
        year: ''
    };

    if (date.day < 10) {
        dateStr.day = '0' + date.day
    } else {
        dateStr.day = date.day.toString();
    }

    if (date.month < 10) {
        dateStr.month = '0' + date.month
    } else {
        dateStr.month = date.month.toString();
    }

    dateStr.year = date.year.toString();

    return dateStr


};


//all date formats
function getAllDateFormats(date) {
    var dateStr = convertDateToStr(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2)
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2)
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd]

}


function checkPalindromeForAllFormate(date) {
    var listOfPalindrome = getAllDateFormats(date)

    var flag = false;
    for (i = 0; i < listOfPalindrome.length; i++) {
        if (listOfPalindrome[i] === reverseString(listOfPalindrome[i])) {
            flag = true;
            break;
        }
    }
    return flag;
}

var date = {
    day: 2,
    month: 12,
    year: 2020
}

console.log(checkPalindromeForAllFormate(date));