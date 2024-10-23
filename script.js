const fs = require('fs')
let count=0
const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1),i=0,numberOfNewLine=0,stdinBuffer = Buffer.alloc(1),inc=0;
    buf.fill(0);
    while ((buf[0] - 10 && buf[0] - 13)) {
       
        s += buf, fs.readSync(0, buf, 0, 1, 0);
        if(buf[0] - 10===0 || buf[0] - 13===0){
            i++;
        }
    }
    fs.readSync(0,stdinBuffer,0,1,null);
    count++;
    return s.slice(1).replace(/^\n/, '');
};
// const result = prompt('Input something: ');
// const result2 = prompt('Input something: ');
// const result3 = prompt('Input something: ');
// console.log('Your input was: ' + result);
// console.log('Your input was: ' + result2);
// console.log('Your input was: ' + result3);


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function calculateFirstNumber(a) {
    return a /2;
}
function calculateSecondNumber(b) {
    return b /3;
}
readline.question('Enter first Number: ', (a) => {
    readline.question('Enter second number: ', (b) => {
        
    const num1 = parseFloat(a);
 const num2 = parseFloat(b);

 const result1 = calculateFirstNumber(num1);
 const result2 = calculateSecondNumber(num2);
     const sum = result1 + result2;

//   console.log(`First number: ${result1}`);
//    console.log(`Second number: ${result2}`);
              console.log(`SUM OF ${a}/2 + ${b}/3 = ${sum}`);

        readline.close();
    });
});