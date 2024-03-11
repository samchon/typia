import typia from "typia";
export const test_issue_1001_protobuf_array_constant_union = (): void => {
  "syntax = \"proto3\";\n\nmessage Foo {\n  repeated bool booleans = 1;\n  repeated int32 numbers = 2;\n  repeated uint64 bigints = 3;\n  repeated string strings = 4;\n}";
};
interface Foo {
  booleans: Array<false | true>;
  numbers: Array<0 | 1 | 2>;
  bigints: Array<0n | 1n | 2n>;
  strings: Array<"a" | "b" | "c">;
}
