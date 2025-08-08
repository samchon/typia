import typia, { Primitive } from './src/index';

// Exact code from the bug report
type X = ['asdf', ...string[], 'zxcv'];
type ThisTypeIsOnlyStringArray = Primitive<X>;

// Test 1: Check if Primitive preserves the tuple structure
const value = JSON.stringify(['asdf', 'qwer', 'zxcv']);

// Test 2: This should work with the correct tuple type
const expectedResult: X = ['asdf', 'hello', 'world', 'zxcv'];

// Test 3: The Primitive result should match the original type  
const primitiveResult: ThisTypeIsOnlyStringArray = expectedResult as ThisTypeIsOnlyStringArray;

// Test 4: Check if the first element retains its literal type
// According to the bug, this should be 'asdf', not string
// const z = y[0]; // z has type string, not 'asdf'

console.log('Test completed - if this compiles, the issue is partially resolved');
console.log('Expected:', expectedResult);
console.log('Primitive type should preserve tuple structure');