import { Primitive } from './src/Primitive';
import { IsTuple } from './src/typings/IsTuple';

// Test the issue reported
type X = ['asdf', ...string[], 'zxcv'];
type ThisTypeIsOnlyStringArray = Primitive<X>;

// Let's test some other edge cases too
type TupleWithoutRest = ['asdf', 'qwer', 'zxcv'];
type TupleWithoutRestPrimitive = Primitive<TupleWithoutRest>;

type TupleWithRestMiddle = ['asdf', ...string[], 'middle', 'zxcv'];
type TupleWithRestMiddlePrimitive = Primitive<TupleWithRestMiddle>;

type TupleWithRestStart = [...string[], 'end'];
type TupleWithRestStartPrimitive = Primitive<TupleWithRestStart>;

type StringArray = string[];
type StringArrayPrimitive = Primitive<StringArray>;

// Debug IsTuple behavior
type IsTupleX = IsTuple<X>;
type IsTupleNormal = IsTuple<TupleWithoutRest>;
type IsTupleStringArray = IsTuple<StringArray>;
type IsTupleMiddle = IsTuple<TupleWithRestMiddle>;
type IsTupleStart = IsTuple<TupleWithRestStart>;

// Debug: check the length property
type LengthX = X['length'];
type LengthNormal = TupleWithoutRest['length'];
type LengthStringArray = StringArray['length'];

// These should show us what's happening
const tupleTest1: IsTupleX = true; // Will this compile?
const tupleTest2: IsTupleNormal = true;  // Will this compile?  
const tupleTest3: IsTupleStringArray = false; // Will this compile?