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
  export type Numeric =
    | "int32"
    | "uint32"
    | "int64"
    | "uint64"
    | "float"
    | "double";
  export type BigNumeric = "int64" | "uint64";
}
