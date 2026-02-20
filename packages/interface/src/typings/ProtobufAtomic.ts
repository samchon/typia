/**
 * Protocol Buffers atomic (scalar) type names.
 *
 * Union of all primitive type identifiers used in Protocol Buffers
 * wire format encoding/decoding.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export type ProtobufAtomic =
  | "bool"
  | "int32"
  | "uint32"
  | "int64"
  | "uint64"
  | "float"
  | "double"
  | "string";
export namespace ProtobufAtomic {
  /** Numeric protobuf types (integers and floats). */
  export type Numeric =
    | "int32"
    | "uint32"
    | "int64"
    | "uint64"
    | "float"
    | "double";

  /** 64-bit integer types that map to JavaScript `bigint`. */
  export type BigNumeric = "int64" | "uint64";
}
