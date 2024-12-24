function incrementCounter(uid) {
  return db.ref('/users/' + uid + '/counter').transaction(function(currentCounter) {
    return currentCounter + 1;
  });
}

incrementCounter('someUID').then(function() {
  console.log('Counter incremented successfully!');
}).catch(function(error) {
  console.error('Error incrementing counter:', error);
});