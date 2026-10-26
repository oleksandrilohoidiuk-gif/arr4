const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumOfDigits(n) {
    if (n === 0) {
        return 0;
    }
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

rl.question('Введіть N: ', (answer) => {
    const n = Number(answer);
    console.log(sumOfDigits(n));
    rl.close();
});
