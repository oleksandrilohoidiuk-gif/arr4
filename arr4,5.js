const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printReversed(n) {
    if (n === 0) {
        return;
    }
    process.stdout.write((n % 10) + ' ');
    printReversed(Math.floor(n / 10));
}

rl.question('Введіть N: ', (answer) => {
    const n = Number(answer);
    printReversed(n);
    console.log();
    rl.close();
});
