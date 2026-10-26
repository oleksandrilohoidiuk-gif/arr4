const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printDirect(n) {
    if (n === 0) {
        return;
    }
    printDirect(Math.floor(n / 10));
    process.stdout.write((n % 10) + ' ');
}

rl.question('Введіть N: ', (answer) => {
    const n = Number(answer);
    printDirect(n);
    console.log();
    rl.close();
});
