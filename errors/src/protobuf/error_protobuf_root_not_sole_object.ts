import typia from "typia";

interface Cat {
  type: "cat";
  name: string;
  ribbon: boolean;
}
interface Dog {
  type: "dog";
  name: string;
  hunt: boolean;
}

//----
// MESSAGE
//----
// ATOMIC
typia.protobuf.message<boolean>();
typia.protobuf.message<number>();
typia.protobuf.message<bigint>();
typia.protobuf.message<string>();

// MAP
typia.protobuf.message<Record<string, boolean>>();
typia.protobuf.message<Record<string, number>>();
typia.protobuf.message<Map<number & typia.tags.Type<"int32">, Cat>>();
typia.protobuf.message<Map<number & typia.tags.Type<"float">, Dog>>();

// ARRAY
typia.protobuf.message<boolean[]>();
typia.protobuf.message<number[]>();
typia.protobuf.message<bigint[]>();
typia.protobuf.message<string[]>();
typia.protobuf.message<Record<string, boolean>[]>();
typia.protobuf.message<Record<string, number>[]>();
typia.protobuf.message<Map<number & typia.tags.Type<"int32">, Cat>[]>();
typia.protobuf.message<Map<number & typia.tags.Type<"float">, Dog>[]>();

//----
// DECODE
//----
// ATOMIC
typia.protobuf.createDecode<boolean>();
typia.protobuf.createDecode<number>();
typia.protobuf.createDecode<bigint>();
typia.protobuf.createDecode<string>();

// MAP
typia.protobuf.createDecode<Record<string, boolean>>();
typia.protobuf.createDecode<Record<string, number>>();
typia.protobuf.createDecode<Map<number & typia.tags.Type<"int32">, Cat>>();
typia.protobuf.createDecode<Map<number & typia.tags.Type<"float">, Dog>>();

// ARRAY
typia.protobuf.createDecode<boolean[]>();
typia.protobuf.createDecode<number[]>();
typia.protobuf.createDecode<bigint[]>();
typia.protobuf.createDecode<string[]>();
typia.protobuf.createDecode<Record<string, boolean>[]>();
typia.protobuf.createDecode<Record<string, number>[]>();
typia.protobuf.createDecode<Map<number & typia.tags.Type<"int32">, Cat>[]>();
typia.protobuf.createDecode<Map<number & typia.tags.Type<"float">, Dog>[]>();

//----
// ENCODE
//----
// ATOMIC
typia.protobuf.createEncode<boolean>();
typia.protobuf.createEncode<number>();
typia.protobuf.createEncode<bigint>();
typia.protobuf.createEncode<string>();

// MAP
typia.protobuf.createEncode<Record<string, boolean>>();
typia.protobuf.createEncode<Record<string, number>>();
typia.protobuf.createEncode<Map<number & typia.tags.Type<"int32">, Cat>>();
typia.protobuf.createEncode<Map<number & typia.tags.Type<"float">, Dog>>();

// ARRAY
typia.protobuf.createEncode<boolean[]>();
typia.protobuf.createEncode<number[]>();
typia.protobuf.createEncode<bigint[]>();
typia.protobuf.createEncode<string[]>();
typia.protobuf.createEncode<Record<string, boolean>[]>();
typia.protobuf.createEncode<Record<string, number>[]>();
typia.protobuf.createEncode<Map<number & typia.tags.Type<"int32">, Cat>[]>();
typia.protobuf.createEncode<Map<number & typia.tags.Type<"float">, Dog>[]>();
