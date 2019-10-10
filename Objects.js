//Create a new object
let newObject = {
    firstname : 'Femi',
    lastname : 'Oye',
    employment : 'Salesforce Admin',
};

function makeNewObject() {
    return {
        firstname : 'Femi',
        lastname : 'Oye',
        employment : 'Salesforce Admin',
      ref() {
        return this;
      }
    };
  };
  
  let user = makeNewObject();
  
  alert( user.ref().this );