const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question){
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program(){
    // Your Code Goes Here...
    let username = await askQuestion("What is your name?");
    console.log(`Thank you ${username}! Have a good Day!`);
    
}
  

Program().then(() => {
    process.exit(0);
});
