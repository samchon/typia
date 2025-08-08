import { Primitive } from "../../../src/Primitive";

export namespace PrimitiveTupleRestLiteral {
  // Test rest tuples with literal elements at specific positions
  export type RestTupleMiddle = ['start', ...string[], 'end'];
  export type RestTupleStart = ['literal', ...string[]];  
  export type RestTupleEnd = [...string[], 'literal'];

  // The key issue that was fixed: Primitive should preserve rest tuple structure
  export type PrimitiveRestTupleMiddle = Primitive<RestTupleMiddle>;  // should be ['start', ...string[], 'end'] 
  export type PrimitiveRestTupleStart = Primitive<RestTupleStart>;    // should be ['literal', ...string[]]
  export type PrimitiveRestTupleEnd = Primitive<RestTupleEnd>;        // should be [...string[], 'literal']

  // Validate that literal types are preserved at specific positions  
  export type FirstElementMiddle = PrimitiveRestTupleMiddle[0];       // should be 'start'
  export type FirstElementStart = PrimitiveRestTupleStart[0];         // should be 'literal'

  // Test values
  export const testRestTupleMiddle: PrimitiveRestTupleMiddle = ['start', 'hello', 'world', 'end'];
  export const testRestTupleStart: PrimitiveRestTupleStart = ['literal', 'hello', 'world'];
  export const testRestTupleEnd: PrimitiveRestTupleEnd = ['hello', 'world', 'literal'];
  
  // Test that literal types are preserved
  export const testFirstMiddle: FirstElementMiddle = 'start';
  export const testFirstStart: FirstElementStart = 'literal';
}