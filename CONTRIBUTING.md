# Contribution Guide
## To Publish an issue
Thanks for your advise. Before publishing an issue, please check some components.

### 1. Search for duplicates
Before publishing an issue, please check whether the duplicated issue exists or not.

  - [Ordinary Issues](https://github.com/samchon/typia/issues)

### 2. Did you find a bug?
When you reporting a bug, then please write about those items:

  - What version you're using
  - If possible, give me an isolated way to reproduce the behavior.
  - The behavior your expect to see, and the actual behavior.

### 3. Do you have a suggestion?
I always welcome your suggestion. When you publishing a suggestion, then please write such items: 

  - A description of the problem you're trying to solve.
  - An overview of the suggested solution.
  - Examples of how the suggestion would work in various places.
    - Code examples showing the expected behavior.




## Contributing Code

### Project Structure

```
typia/
├── src/                      # Source code
│   ├── executable/           # CLI commands and setup utilities
│   │   ├── typia.ts         # Main CLI entry point
│   │   └── setup/           # Project setup and configuration
│   ├── factories/           # Metadata and AST node creation utilities
│   │   ├── MetadataFactory.ts       # Core: Analyzes TS types → metadata
│   │   ├── ExpressionFactory.ts     # Creates TypeScript expressions
│   │   ├── StatementFactory.ts      # Creates TypeScript statements
│   │   └── internal/               # Internal factory utilities
│   ├── programmers/         # Code generation engines (the core logic!)
│   │   ├── IsProgrammer.ts          # Generates is<T>() validation code
│   │   ├── AssertProgrammer.ts      # Generates assert<T>() functions
│   │   ├── ValidateProgrammer.ts    # Generates validate<T>() functions
│   │   ├── json/                   # JSON serialization/parsing code gen
│   │   ├── llm/                    # LLM function calling code gen
│   │   ├── protobuf/              # Protocol Buffers code gen
│   │   └── helpers/               # Common programming utilities
│   ├── transformers/       # AST transformation orchestrators
│   │   ├── CallExpressionTransformer.ts # Main: Routes typia.xxx() calls
│   │   ├── FileTransformer.ts          # File-level transformations
│   │   └── features/                  # Feature-specific transformers
│   │       ├── IsTransformer.ts       # typia.is<T>() transformer
│   │       ├── AssertTransformer.ts   # typia.assert<T>() transformer
│   │       ├── json/                  # JSON feature transformers
│   │       ├── llm/                   # LLM feature transformers
│   │       └── http/                  # HTTP feature transformers
│   ├── schemas/            # Type definitions and metadata structures
│   │   ├── metadata/               # Core metadata type definitions
│   │   ├── json/                  # JSON schema-related types
│   │   └── protobuf/             # Protocol Buffer schema types
│   ├── tags/               # Validation tag implementations (@tag decorations)
│   ├── typings/            # TypeScript utility types and interfaces
│   └── utils/              # General utility functions
├── test/                    # Test files (⚠️ Large directory - 1000+ test files)
│   ├── src/features/       # Feature-specific tests (main test suite)
│   ├── schemas/           # Schema-related tests
│   └── structures/        # Test data structures
├── benchmark/               # Performance benchmarking code and results
├── website/                 # Documentation website source
├── examples/               # Usage examples and demos
└── deploy/                 # Deployment and publishing scripts
```

**🎯 Key Directories for Newcomers:**
- **Start here:** `src/transformers/features/` - See how individual features work
- **Core logic:** `src/programmers/` - This is where the magic happens
- **Type analysis:** `src/factories/MetadataFactory.ts` - Understand how types become metadata
- **Examples:** `test/src/features/` - Real examples of how features should work

### Naming Conventions
- **Files**: Use camelCase for regular files (e.g., `jsonMetadata.ts`)
- **Classes**: Use PascalCase (e.g., `TypeGuardError`, `MetadataFactory`)
- **Interfaces**: Prefix with 'I' (e.g., `IValidation`, `IRandomGenerator`)
- **Type aliases**: Use PascalCase (e.g., `Primitive`, `Resolved`)
- **Functions**: Use camelCase (e.g., `stringify`, `validate`)
- **Constants**: Use UPPER_SNAKE_CASE for global constants
- **Variables**: Use camelCase
- **Test files**: Prefix with `test_` (e.g., `test_stringify_object_recursive`)


### Test your code
Before sending a pull request, please test your new code. Follow these steps carefully:

#### 1. **Build the Project**
```bash
# Clean build - removes old lib/ directory and rebuilds everything
npm run build
```

#### 2. **Understand the Testing System**
Typia uses a custom test runner that discovers and executes functions starting with `test_`:

```typescript
// test/src/features/test_is_string.ts
export function test_is_string(): void {
    // Your test logic here
    const input: unknown = "hello";
    const result = typia.is<string>(input);
    if (!result) throw new Error("String validation failed");
}
```

#### 3. **Run the Test Suite**
```bash
# ⚠️ Note: The package.json uses a custom test system
# Run tests using the deploy script with test tag
npm run test

# Alternative: Run with ts-node directly
npx ts-node deploy --tag test
```

#### 4. **Debug Test Failures**
If tests fail, you have several debugging options:

**Option A: VS Code Debugger (Recommended)**
1. Open VS Code in the project directory
2. Set breakpoints in your code
3. Press `F5` or click "Start Debugging"
4. The debugger will stop at your breakpoints

**Option B: Manual Debugging**
```typescript
// Add console.log statements in your test
export function test_debug_example(): void {
    const input = "test";
    console.log("Input:", input);
    
    const result = typia.is<string>(input);
    console.log("Result:", result);
    
    if (!result) throw new Error("Test failed");
}
```

**Option C: Isolate Specific Tests**
Create a minimal test file to debug specific issues:
```typescript
// debug_test.ts
import typia from "typia";

function debug() {
    const validator = typia.is<string>;
    console.log("Generated function:", validator.toString());
    
    const result = validator("test");
    console.log("Result:", result);
}

debug();
```

#### 5. **Test Categories**
Typia has different types of tests:

- **Feature Tests** (`test/src/features/`): Test individual typia features
- **Schema Tests** (`test/schemas/`): Test schema generation and validation
- **Benchmark Tests** (`benchmark/`): Performance validation
- **Error Tests** (`test-error/`): Tests that should fail compilation

#### 6. **Performance Validation**
Run benchmarks to ensure your changes don't impact performance:
```bash
# Build and run benchmarks (takes several minutes)
cd benchmark
npm install
npm run build
npm run start
```

#### 7. **Common Test Patterns**

**Type Guard Tests:**
```typescript
export function test_is_object(): void {
    interface IPerson { name: string; age: number; }
    
    const valid: unknown = { name: "John", age: 30 };
    const invalid: unknown = { name: "John" }; // missing age
    
    if (!typia.is<IPerson>(valid)) 
        throw new Error("Valid object should pass");
    if (typia.is<IPerson>(invalid)) 
        throw new Error("Invalid object should not pass");
}
```

**JSON Tests:**
```typescript
export function test_json_stringify(): void {
    interface IData { value: string; }
    const input: IData = { value: "test" };
    
    const result = typia.json.stringify<IData>(input);
    const expected = JSON.stringify(input);
    
    if (result !== expected)
        throw new Error(`Expected ${expected}, got ${result}`);
}
```

**Error Handling Tests:**
```typescript
export function test_assert_error(): void {
    try {
        typia.assert<string>(123); // Should throw
        throw new Error("Should have thrown an error");
    } catch (error) {
        if (!(error instanceof Error))
            throw new Error("Should throw Error instance");
    }
}
```

### Adding a Test
When adding new features or fixing bugs, you should add corresponding tests. Here's how:

#### 1. **Choose the Right Test Directory**
```bash
test/src/features/          # For typia feature tests (most common)
test/schemas/              # For schema-related tests  
test-error/               # For tests that should fail compilation
test-esm/                # For ES module compatibility tests
```

#### 2. **Test File Naming Convention**
Follow the existing naming pattern:
```
test_[feature]_[specific_case].ts

Examples:
- test_is_string.ts              # Basic string validation
- test_json_stringify_object.ts  # JSON stringification of objects
- test_assert_recursive.ts       # Assertion with recursive types
```

#### 3. **Test Function Requirements**
Test functions must follow these rules:

```typescript
// ✅ Correct: exported function with test_ prefix
export function test_your_feature_name(): void {
    // Test logic here
    // Throw an Error if test fails
}

// ✅ Also correct: async test
export async function test_async_feature(): Promise<void> {
    // Async test logic
}

// ❌ Incorrect: not exported
function test_private(): void { /* ... */ }

// ❌ Incorrect: wrong prefix
export function validate_something(): void { /* ... */ }
```

#### 4. **Complete Test Example**

```typescript
// test/src/features/test_is_custom_object.ts
import typia from "typia";
import { RandomGenerator } from "typia/lib/utils/RandomGenerator";

export function test_is_custom_object(): void {
    // Define the interface
    interface IPerson {
        name: string;
        age: number;
        email?: string; // optional property
        hobbies: string[];
    }

    // Test with valid data
    const validPerson: IPerson = {
        name: RandomGenerator.string(),
        age: RandomGenerator.number(),
        email: RandomGenerator.email(),
        hobbies: [RandomGenerator.string(), RandomGenerator.string()]
    };

    if (!typia.is<IPerson>(validPerson))
        throw new Error("Valid person should pass validation");

    // Test with invalid data - missing required property
    const invalidPerson = {
        name: RandomGenerator.string(),
        // age is missing
        hobbies: [RandomGenerator.string()]
    };

    if (typia.is<IPerson>(invalidPerson))
        throw new Error("Invalid person should not pass validation");

    // Test with wrong type
    const wrongType = {
        name: RandomGenerator.string(),
        age: "not a number", // wrong type
        hobbies: [RandomGenerator.string()]
    };

    if (typia.is<IPerson>(wrongType))
        throw new Error("Person with wrong age type should not pass validation");
}
```

#### 5. **Testing Different Features**

**Type Guards (`typia.is<T>`):**
```typescript
export function test_is_union_type(): void {
    type StringOrNumber = string | number;
    
    if (!typia.is<StringOrNumber>("hello")) 
        throw new Error("String should be valid");
    if (!typia.is<StringOrNumber>(42)) 
        throw new Error("Number should be valid");
    if (typia.is<StringOrNumber>(true)) 
        throw new Error("Boolean should not be valid");
}
```

**Assertions (`typia.assert<T>`):**
```typescript
export function test_assert_with_error(): void {
    interface IUser { id: number; name: string; }
    
    // Should not throw
    const validUser = typia.assert<IUser>({ id: 1, name: "John" });
    
    // Should throw
    try {
        typia.assert<IUser>({ id: "invalid", name: "John" });
        throw new Error("Should have thrown assertion error");
    } catch (error) {
        if (!(error instanceof Error))
            throw new Error("Should throw Error instance");
        // Optionally check error message
        if (!error.message.includes("id"))
            throw new Error("Error should mention the invalid property");
    }
}
```

**JSON Operations:**
```typescript
export function test_json_stringify_performance(): void {
    interface ILargeObject {
        items: Array<{ id: number; name: string; data: Record<string, any> }>;
    }
    
    const large: ILargeObject = {
        items: Array.from({ length: 1000 }, (_, i) => ({
            id: i,
            name: `Item ${i}`,
            data: { value: i * 2, meta: `meta-${i}` }
        }))
    };
    
    const start = Date.now();
    const result = typia.json.stringify<ILargeObject>(large);
    const end = Date.now();
    
    const expected = JSON.stringify(large);
    if (result !== expected)
        throw new Error("JSON stringify result mismatch");
        
    console.log(`Performance: ${end - start}ms for 1000 items`);
}
```

#### 6. **Using Test Utilities**

Typia provides several utilities for testing:

```typescript
import { RandomGenerator } from "typia/lib/utils/RandomGenerator";

// Generate random test data
const randomString = RandomGenerator.string();
const randomNumber = RandomGenerator.number();
const randomBoolean = RandomGenerator.boolean();
const randomArray = RandomGenerator.array(() => RandomGenerator.string());
```

#### 7. **Running Your New Tests**

After creating your test, verify it works:

```bash
# Build first
npm run build

# Run all tests (includes your new test)
npm run test

# For faster iteration, create a minimal test runner:
# debug_runner.ts
import "./test/src/features/test_your_new_feature";
```

#### 8. **Test Best Practices**

- **Clear naming**: Test names should describe what they're testing
- **Edge cases**: Test boundary conditions, empty arrays, null values
- **Error cases**: Test that invalid inputs properly fail
- **Performance**: For core features, consider performance implications
- **Documentation**: Complex tests should have comments explaining the logic



## Sending a Pull Request
Thanks for your contributing. Before sending a pull request to me, please check those components.

### 1. Include enough descriptions
When you send a pull request, please include a description, of what your change intends to do, on the content. Title, make it clear and simple such below:

  - Refactor features
  - Fix #17
  - Add tests for #28

### 2. Include adequate tests
As I've mentioned in the `Contributing Code` section, your PR should pass the test-automation module. If your PR includes *new features* that have not being handled in the ordinary test-automation module, then also update *add the testing unit* please.

If there're some specific reasons that could not pass the test-automation (not error but *intended*), then please update the ordinary test-automation module or write the reasons on your PR content and *const me update the test-automation module*.




---

## 🚀 Getting Started for Newcomers

Welcome to typia! This section will guide you through understanding the project architecture and making your first contribution. Typia's core magic lies in transforming TypeScript types into optimized runtime code using AST (Abstract Syntax Tree) transformations.

### Understanding Typia's Core Concept

Before diving into code, understand what makes typia special:

```typescript
// When you write this:
const result = typia.is<string>(input);

// Typia transforms it at compile-time to this optimized code:
const result = "string" === typeof input;
```

This transformation happens through a sophisticated pipeline of TypeScript AST analysis and code generation.

### Architecture Overview

Typia follows a clear transformation pipeline:

```
TypeScript Types → Metadata Analysis → Code Generation → AST Transformation → Optimized Runtime Code
```

#### Key Directory Structure

```
src/
├── transformers/       # 🎯 AST transformation entry points
│   ├── CallExpressionTransformer.ts  # Main transformer orchestrator
│   ├── FileTransformer.ts           # File-level transformations
│   └── features/                    # Feature-specific transformers
│       ├── IsTransformer.ts         # Transforms typia.is<T>() calls
│       ├── AssertTransformer.ts     # Transforms typia.assert<T>() calls
│       └── ValidateTransformer.ts   # Transforms typia.validate<T>() calls
│
├── factories/          # 🏭 Metadata and AST node creation
│   ├── MetadataFactory.ts          # Analyzes TypeScript types → metadata
│   ├── ExpressionFactory.ts        # Creates TypeScript expressions
│   └── StatementFactory.ts         # Creates TypeScript statements
│
├── programmers/        # 🔧 Code generation engines
│   ├── IsProgrammer.ts             # Generates type guard functions
│   ├── AssertProgrammer.ts         # Generates assertion functions
│   ├── ValidateProgrammer.ts       # Generates validation functions
│   └── json/                       # JSON-specific programmers
│
├── schemas/           # 📋 Type definitions and metadata structures
│   ├── metadata/                   # Core metadata types
│   └── json/                      # JSON schema types
│
└── utils/             # 🔨 Utility functions and helpers
```

### The Transformation Flow Explained

#### 1. **Type Analysis Phase** (`factories/MetadataFactory.ts`)
```typescript
// Input: TypeScript type like `{ name: string; age: number }`
// Output: Rich metadata describing the type structure
const metadata = MetadataFactory.analyze(checker, type);
```

#### 2. **Code Generation Phase** (`programmers/`)
```typescript
// Input: Metadata from step 1
// Output: TypeScript AST nodes for optimized validation code
const expression = IsProgrammer.write(metadata);
```

#### 3. **AST Transformation Phase** (`transformers/`)
```typescript
// Input: Original typia.is<T>() call
// Output: Replaces call with generated validation code
CallExpressionTransformer.transform(node, generatedCode);
```

### Common Development Workflows

#### Adding a New Feature

1. **Create a Transformer** (`src/transformers/features/YourFeatureTransformer.ts`)
2. **Create a Programmer** (`src/programmers/YourFeatureProgrammer.ts`)
3. **Register in CallExpressionTransformer** (add your transformer to the main transformer)
4. **Add Tests** (`test/src/features/test_yourfeature.ts`)

#### Example: Adding a Simple Feature

Let's say you want to add `typia.isArray<T>()` function:

1. **Create the Programmer** (`src/programmers/IsArrayProgrammer.ts`):
```typescript
export namespace IsArrayProgrammer {
  export const write = (metadata: Metadata): ts.Expression => {
    return ts.factory.createCallExpression(
      ts.factory.createPropertyAccessExpression(
        ts.factory.createIdentifier("Array"),
        "isArray"
      ),
      undefined,
      [ts.factory.createIdentifier("input")]
    );
  };
}
```

2. **Create the Transformer** (`src/transformers/features/IsArrayTransformer.ts`):
```typescript
export namespace IsArrayTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "isArray",
      write: (x) => IsArrayProgrammer.write(x.metadata),
    });
}
```

3. **Register in CallExpressionTransformer**:
```typescript
// Add to the transformer map
"isArray": IsArrayTransformer.transform,
```

### Debugging Transformations

#### 1. **Enable Development Mode**
```bash
npm run dev  # Watches for changes and rebuilds
```

#### 2. **Debug Generated Code**
Add console.log in programmers to see generated AST:
```typescript
const expression = IsProgrammer.write(metadata);
console.log(ts.createPrinter().printNode(ts.EmitHint.Expression, expression, undefined));
```

#### 3. **Test Specific Transformations**
Create a simple test file and run the transformer:
```typescript
// debug.ts
import typia from "typia";
const result = typia.is<string>("test");  // Your test case
```

#### 4. **Use VS Code Debugger**
The project includes `.vscode/launch.json`. Press F5 to start debugging.

### Understanding Metadata

Metadata is the core data structure that represents TypeScript types:

```typescript
interface Metadata {
  any: boolean;           // If type accepts any value
  required: boolean;      // If property is required
  optional: boolean;      // If property is optional
  nullable: boolean;      // If type can be null
  functional: boolean;    // If type is a function
  atomics: MetadataAtomic[]; // Primitive types (string, number, etc.)
  constants: MetadataConstant[]; // Literal values
  templates: MetadataTemplate[]; // Template literal types
  arrays: MetadataArrayType[];   // Array types
  objects: MetadataObjectType[]; // Object types
  // ... more properties
}
```

### AST Deep Dive

#### Understanding TypeScript AST

AST (Abstract Syntax Tree) represents code structure. For example:

```typescript
// Code: typia.is<string>(input)
// AST Structure:
CallExpression {
  expression: PropertyAccessExpression {
    expression: Identifier { text: "typia" },
    name: Identifier { text: "is" }
  },
  typeArguments: [TypeReference { typeName: "string" }],
  arguments: [Identifier { text: "input" }]
}
```

#### Key AST Concepts in Typia

1. **CallExpression**: Function calls like `typia.is<T>()`
2. **TypeReference**: Generic type parameters like `<string>`
3. **PropertyAccessExpression**: Object property access like `typia.is`
4. **Identifier**: Variable names and identifiers

#### Transformer Pattern

All typia transformers follow this pattern:

```typescript
export namespace YourTransformer {
  export const transform = (props: ITransformProps) => {
    // 1. Analyze the TypeScript type
    const metadata = MetadataFactory.analyze(props.checker, props.type);
    
    // 2. Generate optimized code
    const expression = YourProgrammer.write(metadata);
    
    // 3. Return the transformation result
    return expression;
  };
}
```

### Working with Different Features

#### JSON Operations (`src/programmers/json/`)
- `JsonStringifyProgrammer.ts`: Fast JSON serialization
- `JsonParseProgrammer.ts`: Type-safe JSON parsing
- `JsonSchemaProgrammer.ts`: JSON schema generation

#### LLM Integration (`src/programmers/llm/`)
- `LlmApplicationProgrammer.ts`: LLM function calling schemas
- `LlmParametersProgrammer.ts`: Parameter schema generation
- `LlmSchemaProgrammer.ts`: Type-to-schema conversion

#### Protocol Buffers (`src/programmers/protobuf/`)
- `ProtobufEncodeProgrammer.ts`: Encoding to Protocol Buffers
- `ProtobufDecodeProgrammer.ts`: Decoding from Protocol Buffers
- `ProtobufMessageProgrammer.ts`: .proto message generation

### Testing Your Changes

#### 1. **Build the Project**
```bash
npm run build
```

#### 2. **Run Tests**
```bash
npm run test
```

#### 3. **Create Feature Tests**
Add tests in `test/src/features/` following the pattern:
```typescript
export function test_is_string(): void {
  const validator = typia.is<string>;
  if (!validator("hello")) throw new Error("String validation failed");
  if (validator(123)) throw new Error("Number should not pass string validation");
}
```

#### 4. **Performance Testing**
Typia includes extensive benchmarks. Run them to ensure your changes don't regress performance:
```bash
# Your changes should not significantly impact performance
npm run benchmark
```

### Code Style and Best Practices

#### 1. **Follow TypeScript Best Practices**
- Use strict type checking
- Prefer `const` assertions
- Use meaningful variable names

#### 2. **AST Node Creation**
Use factory methods consistently:
```typescript
// Good
ts.factory.createIdentifier("input")

// Not recommended
{ kind: ts.SyntaxKind.Identifier, text: "input" }
```

#### 3. **Error Handling**
Provide clear error messages for transformation failures:
```typescript
if (!metadata.objects.length) {
  throw new Error("Type must be an object for this transformation");
}
```

### Common Pitfalls and Solutions

#### 1. **Circular Reference Handling**
TypeScript types can have circular references. Use metadata collection to handle them:
```typescript
const collection = new MetadataCollection();
const metadata = MetadataFactory.analyze(checker, type, { collection });
```

#### 2. **Type Parameter Resolution**
Generic type parameters need special handling:
```typescript
// Check if type is a type parameter
if (type.flags & ts.TypeFlags.TypeParameter) {
  // Handle type parameter case
}
```

#### 3. **Node Positioning**
Maintain source map information for better error reporting:
```typescript
const expression = ts.factory.createCallExpression(/* ... */);
ts.setSourceMapRange(expression, originalNode);
```

### Resources for Learning

#### 1. **TypeScript Compiler API**
- [TypeScript Compiler API Handbook](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API)
- [AST Explorer](https://astexplorer.net/) - Visualize TypeScript AST

#### 2. **Typia-Specific Resources**
- [Official Documentation](https://typia.io/docs/)
- [API Reference](https://typia.io/api)
- [Benchmark Results](https://github.com/samchon/typia/tree/master/benchmark/results)

#### 3. **Example Projects**
Check the `examples/` directory for practical usage examples.

---

## References
I've referenced contribution guidance of the TypeScript.
  - https://github.com/Microsoft/TypeScript/blob/master/CONTRIBUTING.md