'use strict';
function fizzbuzzer(num) {
    if (num % 15 === 0) return 'fizzbuzz';
    if (num % 5 === 0) return 'buzz';
    if (num % 3 === 0) return 'fizz';
    return num;
}

function fizzbuzzUpTo(countTo) {
    const results = [];
    for (let i = 1; i <= countTo; i++) {
        results.push(fizzbuzzer(i));
    }
    return results;
}

function genDiv(fizzbuzzElement) {
    if (typeof(fizzbuzzElement) === 'string') {
        return `<div class="fizz-buzz-item ${fizzbuzzElement}"><span>${fizzbuzzElement}</span></div>`;
    }
    if (typeof(fizzbuzzElement) === 'number') {
        return `<div class="fizz-buzz-item"><span>${fizzbuzzElement}</span></div>`;
    }
}

function outputFizzbuzzHtml(num) {
    const fizzbuzzResults = fizzbuzzUpTo(num);
    const fizzbuzzElements = fizzbuzzResults.map(element => genDiv(element));
    $('.js-results').html(fizzbuzzElements);
}

function main() {
    $('#number-chooser').on('submit', event => {
        event.preventDefault();
        const countTo = $('#number-choice').val();
        event.target.reset();
        outputFizzbuzzHtml(countTo);
    })
}


$(main)