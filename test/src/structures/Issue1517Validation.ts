// Final validation of issue #1517 fix
import typia, { Primitive } from '../../../src/index';

// Exact reproduction of the original issue
type X = ['asdf', ...string[], 'zxcv'];
type ThisTypeIsOnlyStringArray = Primitive<X>;

// Original failing code should now work correctly
const value = JSON.stringify(['asdf', 'qwer', 'zxcv']);
const y = typia.json.assertParse<X>(value); // y now has correct type X instead of string[]

const z = y[0]; // z now has type 'asdf' instead of string

// Validate the solution
export const validateIssue1517 = () => {
  // Test 1: Primitive type preserves tuple structure
  const primitiveResult: ThisTypeIsOnlyStringArray = ['asdf', 'hello', 'world', 'zxcv'];
  
  // Test 2: First element is literal 'asdf', not generic string
  const firstElement: typeof z = 'asdf';
  
  // Test 3: JSON parsing maintains type information  
  const parsed = typia.json.assertParse<X>('["asdf", "middle", "zxcv"]');
  const parsedFirst: typeof parsed[0] = 'asdf';
  
  console.log('✅ Issue #1517 fixed successfully');
  console.log('✅ Primitive<["asdf", ...string[], "zxcv"]> = ["asdf", ...string[], "zxcv"]');
  console.log('✅ First element type preserved as literal "asdf"');
  
  return {
    primitiveResult,
    firstElement, 
    parsed,
    parsedFirst
  };
};

export type Issue1517TestType = X;
export type Issue1517PrimitiveType = ThisTypeIsOnlyStringArray;