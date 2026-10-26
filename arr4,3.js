const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPowerOfTwo(n) {
    if (n === 1) {
        return true;
    }
    if (n % 2 !== 0) {
        return false;
    }
    return isPowerOfTwo(n / 2);
}

rl.question('Введіть N: ', (answer) => {
    const n = Number(answer);
    if (isPowerOfTwo(n)) {
        console.log('YES');
    } else {
        console.log('NO');
    }
    rl.close();
});
