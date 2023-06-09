function getUserData(userId, callback) {
    // Simulate an asynchronous operation to get user data
    setTimeout(() => {
      const userData = {
        id: userId,
        name: 'John Doe',
        email: 'johndoe@example.com',
        address: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zipcode: '12345'
      };
      callback(userData);
    }, 1000); // Wait 1 second before returning data
  }
  
  function getUserOrders(userId, callback) {
    // Simulate an asynchronous operation to get user orders
    setTimeout(() => {
      const userOrders = [
        { id: 1, name: 'tanishka', total: 100 },
        { id: 2, name: 'tanya', total: 200 },
        { id: 3, name: 'tanu', total: 300 }
      ];
      callback(userOrders);
    }, 500); // Wait 0.5 seconds before returning data
  }
  
  function displayUserData(userData) {
    console.log('User data:');
    console.log(userData);
  }
  
  function displayUserOrders(userOrders) {
    console.log('User orders:');
    console.log(userOrders);
  }
  
  const userId = 123;
  getUserData(userId, displayUserData);
  getUserOrders(userId, displayUserOrders);
  