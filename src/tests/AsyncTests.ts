
function delay(ms: number) {
    return new Promise<void>(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function asyncAwait() {
    console.log("Knock, knock!");

    await delay(1000);
    console.log("Who's there?");

    await delay(1000);
    console.log("async/await!");
    return "something";
}

asyncAwait().then((arg)=>{ console.log('The End ' + arg); });