function resolveAfter5Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 5000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter5Seconds();
    console.log(result);
    // expected output: 'resolved'
  }
  
  asyncCall();