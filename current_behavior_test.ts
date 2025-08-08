import { Primitive } from './src/Primitive';
import { IsTuple } from './src/typings/IsTuple';

// Existing working rest tuple from the tests
type TupleRestAtomic = [boolean, number, ...string[]];
type IsTupleRestAtomic = IsTuple<TupleRestAtomic>;
type PrimitiveRestAtomic = Primitive<TupleRestAtomic>;

// The problematic case from the bug report
type ProblemTuple = ['asdf', ...string[], 'zxcv'];
type IsProblemTuple = IsTuple<ProblemTuple>;
type PrimitiveProblem = Primitive<ProblemTuple>;

// Regular array for comparison
type RegularArray = string[];
type IsRegularArray = IsTuple<RegularArray>;

// Test different assumptions about what IsTuple returns
const test1a: IsTupleRestAtomic extends true ? true : false = false; // if IsTupleRestAtomic is false
const test1b: IsTupleRestAtomic extends true ? true : false = true;  // if IsTupleRestAtomic is true

const test2a: IsProblemTuple extends true ? true : false = false; // if IsProblemTuple is false
const test2b: IsProblemTuple extends true ? true : false = true;  // if IsProblemTuple is true