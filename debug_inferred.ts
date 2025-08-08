// Let me check the actual inferred types more carefully

type TupleRestAtomic = [boolean, number, ...string[]];
type ProblemTuple = ['asdf', ...string[], 'zxcv'];
type RegularArray = string[];

// Check what gets inferred for each
type InferredRest = TupleRestAtomic extends readonly (infer U)[] ? U : never;     
type InferredProblem = ProblemTuple extends readonly (infer U)[] ? U : never;    
type InferredArray = RegularArray extends readonly (infer U)[] ? U : never;      

// Test what these actually resolve to by using them
const testRest: InferredRest = "string";    // should work if union includes string
const testProblem: InferredProblem = "asdf"; // should work if union includes 'asdf'
const testArray: InferredArray = "hello";    // should work if string