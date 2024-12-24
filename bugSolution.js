function incrementCounter(uid) {
  return db.ref('/users/' + uid + '/counter').transaction(function(currentCounter) {
    // Handle case where counter doesn't exist
    if (currentCounter === null) {
      return 1; // Initialize to 1 if the counter is not set.
    } else {
      return currentCounter + 1; // Increment if counter exists
    }
  });
}

incrementCounter('someUID').then(function() {
  console.log('Counter incremented successfully!');
}).catch(function(error) {
  console.error('Error incrementing counter:', error);
});