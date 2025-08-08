import { IsTuple } from './src/typings/IsTuple';

// Test our IsTuple function directly
type X = ['asdf', ...string[], 'zxcv'];
type IsTupleX = IsTuple<X>;

// Test assignments to see what IsTuple returns
const testTuple: IsTupleX = true;   // Should compile if IsTuple<X> is true

// Test step-by-step what happens in Primitive processing
// From Primitive.ts, line 70-73:
// Instance extends Array<infer T>
//   ? IsTuple<Instance> extends true
//     ? PrimitiveTuple<Instance>
//     : PrimitiveMain<T>[]

// First, what does X extend Array<infer T> give us?
type ArrayInfer = X extends Array<infer T> ? T : never;  // Should be string

// Let me test this manually with a simple PrimitiveTuple simulation
type SimplePrimitiveTuple<T extends readonly any[]> = 
  T extends [infer F, ...infer Rest extends readonly any[]]
    ? Rest extends readonly []
      ? [F]  // Base case: single element
      : [F, ...SimplePrimitiveTuple<Rest>]
    : [];

type TestSimplePrimitive = SimplePrimitiveTuple<X>;