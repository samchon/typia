import typia, { tags } from "typia";

interface TypeTagExample {
  // ATOMIC TYPES
  int32: number & tags.Type<"int32"> & tags.Sequence<10>;
  uint32: number & tags.Type<"uint32"> & tags.Sequence<20>;
  uint64: bigint & tags.Type<"uint64"> & tags.Sequence<30>;
  int64: number & tags.Type<"int64"> & tags.Sequence<40>;
  float: number & tags.Type<"float"> & tags.Sequence<50>;
  double: (number & tags.Sequence<60>) | undefined;
  string: (string & tags.Sequence<70>) | null;

  // UNION TYPES
  uint32_or_double: number &
    (
      | (tags.Type<"uint32"> & tags.Sequence<61>)
      | (tags.Type<"double"> & tags.Sequence<62>)
    );
  int32_or_uint64:
    | (number & tags.Type<"int32"> & tags.Sequence<71>)
    | (bigint & tags.Type<"uint64"> & tags.Sequence<72>);
  int32_or_float_or_uint64:
    | (number &
        (
          | (tags.Type<"int32"> & tags.Sequence<81>)
          | (tags.Type<"float"> & tags.Sequence<82>)
        ))
    | (bigint & tags.Type<"uint64"> & tags.Sequence<83>);

  // ARRAY AND MAP
  uint64_array: Array<bigint & tags.Type<"uint64">> & tags.Sequence<90>;
  int32_map?:
    | (Map<number & tags.Type<"int32">, string> & tags.Sequence<100>)
    | null;
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
