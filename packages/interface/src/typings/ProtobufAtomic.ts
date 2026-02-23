<<<<<<< HEAD
=======
/**
 * Protocol Buffers atomic (scalar) type names.
 *
 * Union of all primitive type identifiers used in Protocol Buffers wire format
 * encoding/decoding.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
<<<<<<< HEAD
=======
  /** Numeric protobuf types (integers and floats). */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  export type Numeric =
    | "int32"
    | "uint32"
    | "int64"
    | "uint64"
    | "float"
    | "double";
<<<<<<< HEAD
=======

  /** 64-bit integer types that map to JavaScript `bigint`. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  export type BigNumeric = "int64" | "uint64";
}
