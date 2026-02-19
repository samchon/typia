import { IProtobufSchema } from "./IProtobufSchema";

export type IProtobufPropertyType =
  | IProtobufPropertyType.IByte
  | IProtobufPropertyType.IBoolean
  | IProtobufPropertyType.IBigint
  | IProtobufPropertyType.INumber
  | IProtobufPropertyType.IString
  | IProtobufPropertyType.IArray
  | IProtobufPropertyType.IObject
  | IProtobufPropertyType.IMap;
export namespace IProtobufPropertyType {
  export interface IByte extends IProtobufSchema.IByte {
    index: number;
  }
  export interface IBoolean extends IProtobufSchema.IBoolean {
    index: number;
  }
  export interface IBigint extends IProtobufSchema.IBigint {
    index: number;
  }
  export interface INumber extends IProtobufSchema.INumber {
    index: number;
  }
  export interface IString extends IProtobufSchema.IString {
    index: number;
  }
  export interface IArray extends IProtobufSchema.IArray {
    index: number;
  }
  export interface IObject extends IProtobufSchema.IObject {
    index: number;
  }
  export interface IMap extends IProtobufSchema.IMap {
    index: number;
  }
}
