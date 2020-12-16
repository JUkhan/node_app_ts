
const getCustomerSync = function(id:number) { 
    console.log('Reading a customer from MongoDB...');
    return { id: id, points: 11, email:'a' };
  }
  
  const getCustomer = async function(id:number) { 
    return new Promise((resolve, reject) => {
      console.log('Reading a customer from MongoDB...');
      resolve({ id: id, points: 11 });
    });
  }

  export {getCustomer, getCustomerSync};
  
  export default{getCustomer, getCustomerSync}