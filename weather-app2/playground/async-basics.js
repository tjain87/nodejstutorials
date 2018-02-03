console.log('Start App');

setTimeout(() => {
    console.log('SetTimeout');
}, 2000);

setTimeout(() => {
    console.log('SetTimeout with no delay');
}, 0);

console.log('Finish App');