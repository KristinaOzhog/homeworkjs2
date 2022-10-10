function simple(n) {

    const simples = [];
    for  (let i = 2; simples.length < n; i++) {
        let stopCount = false;
        for (let j = 0; j < i; j++) {
            if (i % simples[j] === 0) {
                stopCount = true;
                break;
            }
        }
        if (stopCount === false) {
            simples.push (i)
        };

    }
    return simples;
}


console.time();
console.log(simple(process.argv[2]));
console.timeEnd();