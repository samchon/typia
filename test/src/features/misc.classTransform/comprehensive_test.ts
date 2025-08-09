import typia from "typia";

// Test with different types of classes
class SimpleClass {
  constructor(public name: string, public value: number) {}
  
  greet() {
    return `Hello, ${this.name}!`;
  }
}

class ComplexClass {
  public id: number;
  
  constructor(id: number, public data: { x: number; y: string }) {
    this.id = id;
  }
  
  getId() {
    return this.id;
  }
  
  getData() {
    return this.data;
  }
}

export const comprehensiveClassTransformTest = (): void => {
  // Test SimpleClass
  const simpleInput = { name: "test", value: 42 };
  console.log("=== Testing SimpleClass ===");
  const simpleResult = typia.misc.classTransform<SimpleClass>(simpleInput);
  console.log("Input:", simpleInput);
  console.log("Result:", simpleResult);
  console.log("instanceof SimpleClass:", simpleResult instanceof SimpleClass);
  console.log("greet():", simpleResult.greet());

  // Test ComplexClass  
  const complexInput = { id: 123, data: { x: 456, y: "hello" } };
  console.log("\n=== Testing ComplexClass ===");
  const complexResult = typia.misc.classTransform<ComplexClass>(complexInput);
  console.log("Input:", complexInput);
  console.log("Result:", complexResult);
  console.log("instanceof ComplexClass:", complexResult instanceof ComplexClass);
  console.log("getId():", complexResult.getId());
  console.log("getData():", complexResult.getData());

  // Test with assertClassTransform
  console.log("\n=== Testing assertClassTransform ===");
  try {
    console.log("About to call assertClassTransform...");
    const assertResult = typia.misc.assertClassTransform<SimpleClass>(simpleInput);
    console.log("Assert result type:", typeof assertResult);
    console.log("Assert result:", assertResult);
    
    if (typeof assertResult === 'function') {
      console.log("assertResult is a function, trying to call it...");
      const actualResult = assertResult();
      console.log("Actual result after calling:", actualResult);
      console.log("instanceof SimpleClass:", actualResult instanceof SimpleClass);
      if (actualResult && typeof actualResult.greet === 'function') {
        console.log("greet():", actualResult.greet());
      }
    } else if (assertResult && typeof assertResult === 'object') {
      console.log("instanceof SimpleClass:", assertResult instanceof SimpleClass);
      if (typeof assertResult.greet === 'function') {
        console.log("greet():", assertResult.greet());
      }
    } else {
      console.log("Unexpected result type");
    }
  } catch (error) {
    console.error("Assert failed:", error);
  }
};