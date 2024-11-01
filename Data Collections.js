//part 2

const numberOfColumns = Array.isArray(cachedData)
    && cachedData.length > 0 ? cachedData[0].length : 0;
console.log(numberOfColumns); // number of columns

// part 3
const headers = cachedData[0].map(header => header.toLowerCase()); // Convert headers to lowercase

const objectsArray = cachedData.slice(1).map(row =>
    Object.fromEntries(row.map((value, index) => [headers[index], value])) // Create key-value pairs
);

console.log(objectsArray);

//part 4


objectsArray = objectsArray.slice(0, -1); // last element 

objectsArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" }); // new object at index 1

//  end of array object
objectsArray = [...objectsArray, { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

console.log(objectsArray);

// Cal average age
const totalAge = objectsArray.reduce((sum, obj) => sum + Number(obj.age), 0);
const averageAge = totalAge / objectsArray.length;

console.log(`Average Age: ${averageAge}`);