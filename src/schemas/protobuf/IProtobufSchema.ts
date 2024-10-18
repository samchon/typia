import { MetadataArrayType } from "../metadata/MetadataArrayType";
import { MetadataMap } from "../metadata/MetadataMap";
import { MetadataObjectType } from "../metadata/MetadataObjectType";

export type IProtobufSchema =
  | IProtobufSchema.IByte
  | IProtobufSchema.IBoolean
  | IProtobufSchema.IBigint
  | IProtobufSchema.INumber
  | IProtobufSchema.IString
  | IProtobufSchema.IArray
  | IProtobufSchema.IObject
  | IProtobufSchema.IMap;
export namespace IProtobufSchema {
  export interface IByte {
    type: "bytes";
  }
  export interface IBoolean {
    type: "bool";
  }
  export interface IBigint {
    type: "bigint";
    name: "int64" | "uint64";
  }
  export interface INumber {
    type: "number";
    name: "int32" | "int64" | "uint32" | "uint64" | "float" | "double";
  }
  export interface IString {
    type: "string";
  }
  export interface IArray {
    type: "array";
    array: MetadataArrayType;
    value: Exclude<IProtobufSchema, IArray | IMap>;
  }
  export interface IObject {
    type: "object";
    object: MetadataObjectType;
  }
  export interface IMap {
    type: "map";
    map: MetadataMap | MetadataObjectType;
    key:
      | IProtobufSchema.IBoolean
      | IProtobufSchema.INumber
      | IProtobufSchema.IString;
    value: Exclude<IProtobufSchema, IArray | IMap>;
  }
}
