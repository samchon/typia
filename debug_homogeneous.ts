// Debug the homogeneous check step by step

type TupleRestAtomic = [boolean, number, ...string[]];
type ProblemTuple = ['asdf', ...string[], 'zxcv'];
type RegularArray = string[];

// Test homogeneous check: T extends readonly (infer U)[]
type HomogeneousTestRest = TupleRestAtomic extends readonly (infer U1)[] ? U1 : never;     // should be boolean | number | string
type HomogeneousTestProblem = ProblemTuple extends readonly (infer U2)[] ? U2 : never;    // should be 'asdf' | string | 'zxcv'  
type HomogeneousTestArray = RegularArray extends readonly (infer U3)[] ? U3 : never;      // should be string

// Test if they can be expressed as uniform arrays: T extends readonly U[]
type UniformTestRest = TupleRestAtomic extends readonly HomogeneousTestRest[] ? true : false;      // should be false (heterogeneous)
type UniformTestProblem = ProblemTuple extends readonly HomogeneousTestProblem[] ? true : false;   // should be false (heterogeneous)
type UniformTestArray = RegularArray extends readonly HomogeneousTestArray[] ? true : false;       // should be true (homogeneous)

// Test the assignments
const test1: UniformTestRest = false;      // should compile if false
const test2: UniformTestProblem = false;   // should compile if false 
const test3: UniformTestArray = true;      // should compile if true