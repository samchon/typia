const typia = require("./lib/index.js");

const testData = {
    firstName: "John",
    lastName: "Doe", 
    homeAddress: {
        streetName: "Main Street",
        zipCode: 12345
    }
};

console.log("Original:", JSON.stringify(testData, null, 2));

// Test if the kebab function was exported correctly
try {
    console.log("Kebab function exists:", typeof typia.notations.kebab);
    console.log("Camel function exists:", typeof typia.notations.camel);
    
    // Test individual naming convention functions
    const NamingConvention = require("./lib/utils/NamingConvention.js");
    console.log("Testing individual kebab function:");
    console.log("firstName ->", NamingConvention.NamingConvention.kebab("firstName"));
    console.log("lastName ->", NamingConvention.NamingConvention.kebab("lastName"));
    console.log("homeAddress ->", NamingConvention.NamingConvention.kebab("homeAddress"));
    console.log("streetName ->", NamingConvention.NamingConvention.kebab("streetName"));
    console.log("zipCode ->", NamingConvention.NamingConvention.kebab("zipCode"));
    
    // Test reverse conversion
    console.log("Testing reverse conversion:");
    console.log("first-name ->", NamingConvention.NamingConvention.camel("first-name"));
    console.log("last-name ->", NamingConvention.NamingConvention.camel("last-name"));
} catch (error) {
    console.error("Error:", error.message);
}