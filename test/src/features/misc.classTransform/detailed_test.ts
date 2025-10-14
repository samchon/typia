import typia from "typia";

class TestClass {
  constructor(
    public name: string,
    public value: number,
  ) {}

  greet() {
    return `Hello, ${this.name}!`;
  }
}

export const detailedClassTransformTest = (): void => {
  const input = { name: "test", value: 42 };
  
  console.log("=== Testing typia.misc.classTransform ===");
  console.log("Input:", input);
  
  try {
    const transformed = typia.misc.classTransform<TestClass>(input);
    
    console.log("Transformed:", transformed);
    console.log("Type check (instanceof):", transformed instanceof TestClass);
    console.log("Properties - name:", transformed.name);
    console.log("Properties - value:", transformed.value);
    console.log("Constructor name:", transformed.constructor.name);
    
    // Test if method exists
    if (typeof transformed.greet === 'function') {
      console.log("Method greet():", transformed.greet());
    } else {
      console.log("Method greet() is missing or not a function");
    }
    
  } catch (error) {
    console.error("Error:", error);
  }
};