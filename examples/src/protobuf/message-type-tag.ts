import typia, { tags } from "typia";

interface TypeTagExample {
  // ATOMIC TYPES
  int32: number & tags.Type<"int32">;
  uint32: number & tags.Type<"uint32">;
  uint64: bigint & tags.Type<"uint64">;
  int64: number & tags.Type<"int64">;
  float: number & tags.Type<"float">;
  double: number | undefined;
  string: string | null;

  // UNION TYPES
  uint32_or_double: number & (tags.Type<"uint32"> | tags.Type<"double">);
  int32_or_uint64:
    | (number & tags.Type<"int32">)
    | (bigint & tags.Type<"uint64">);
  int32_or_float_or_uint64:
    | (number & (tags.Type<"int32"> | tags.Type<"float">))
    | (bigint & tags.Type<"uint64">);

  // ARRAY AND MAP
  uint64_array: Array<bigint & tags.Type<"uint64">>;
  int32_map?: Map<number & tags.Type<"int32">, string> | null;
}

//----
// PROTOBUF MESSAGE SCHEMA
//----
typia.protobuf.message<TypeTagExample>();

//----
// DECODE FUNCTION
//----
typia.protobuf.createDecode<TypeTagExample>();

//----
// ENCODE FUNCTION
//----
typia.protobuf.createEncode<TypeTagExample>();
