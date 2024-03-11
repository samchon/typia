import typia from "typia";

export const test_issue_1001_protobuf_array_constant_union = (): void => {
  typia.protobuf.message<Foo>();
};
interface Foo {
  booleans: Array<false | true>;
  numbers: Array<0 | 1 | 2>;
  bigints: Array<0n | 1n | 2n>;
  strings: Array<"a" | "b" | "c">;
}
