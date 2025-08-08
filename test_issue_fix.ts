import { Primitive } from './src/Primitive';

// Test the original issue from the bug report
type X = ['asdf', ...string[], 'zxcv'];
type PrimitiveX = Primitive<X>;

// Expected behavior according to the issue
type Expected = ['asdf', ...string[], 'zxcv'];

// Test if they match
type DoesMatch = PrimitiveX extends Expected ? (Expected extends PrimitiveX ? true : false) : false;

// Test assignment to validate the fix works
const testOriginalIssue: PrimitiveX = ['asdf', 'hello', 'world', 'zxcv'];  // Should work now

// For comparison, test that regular arrays still work as arrays
type RegularArray = string[];  
type PrimitiveRegularArray = Primitive<RegularArray>;

const testRegularArray: PrimitiveRegularArray = ['any', 'strings', 'here'];  // Should work

// Test the assignment matches expectation
const testMatch: DoesMatch = true;  // Should compile if the types match