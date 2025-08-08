import { Primitive } from './src/Primitive';
import { IsTuple } from './src/typings/IsTuple';

// Focus on the specific issue from the bug report
type X = ['asdf', ...string[], 'zxcv'];

// Debug step by step
type Step1_IsTupleX = IsTuple<X>;
type Step2_PrimitiveX = Primitive<X>;

// Check if our expected result matches
type ExpectedResult = ['asdf', ...string[], 'zxcv'];
type DoesMatch = Step2_PrimitiveX extends ExpectedResult ? true : false;
type DoesMatchReverse = ExpectedResult extends Step2_PrimitiveX ? true : false;

// Test other cases that should work
type TupleWithRestEnd = [...string[], 'end'];
type TupleWithRestEndIsTuple = IsTuple<TupleWithRestEnd>;
type TupleWithRestEndPrimitive = Primitive<TupleWithRestEnd>;

// Test assignments to see actual types
const test1: Step1_IsTupleX = true;  // Should be true
const test2: TupleWithRestEndIsTuple = true;  // Should be true  
const test3: DoesMatch = true;        // Should be true if types match