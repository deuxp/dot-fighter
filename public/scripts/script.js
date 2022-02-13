let fname = 'friedi'
let a = 7

// if..else
if (fname !== 'friedi') {
    console.log('the === operator is working fine')
} else {
    console.log('the !== operator is working fine')
}


// ternary
a % 2 === 0 ? console.log(`${a} is even.`) : console.log(`${a} is odd.`);

// switch
switch (a) {
    case 1:
        console.log(`${a} does not match 1 the case`);
        break;
    case 2:
        console.log(`${a} does not match 2 the case`);
        break;
    case 3:
        console.log(`${a} does not match 3 the case`);
        break;
    case 4:
        console.log(`${a} does not match 4 the case`);
        break;
    case 5:
        console.log(`${a} does not match 5 the case`);
        break;
    case 6:
        console.log(`${a} does not match 6 the case`);
        break;
    case 7:
        console.log(`${a} does match 7. ding ding`);
        break;
    default:
        console.log(`${a} does not match anything at all.`);
        break;
}