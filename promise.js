var promise1 = Promise.resolve("a");

promise1.then(()=> {
  console.log("Hello World");``
});

var promise2 = new Promise(function(resolve){
    resolve('a');
   });
   
promise2.then(x => console.log(x))
        .then(console.log('b'));

var promise1 = Promise.resolve("a");

promise1.then(()=> {
    console.log("Hello World");``
});


// Output
// b
// Hello World
// a
// Hello World