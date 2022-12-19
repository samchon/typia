import typia from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_message } from "../internal/_test_message";

export const test_message_ArrayAtomicAlias = _test_message(
    "ArrayAtomicAlias",
    typia.message<ArrayAtomicAlias>(),
    `syntax = \"proto3\";

message __Main {
    [Array<boolean>, Array<number>, Array<string>] value = 1;
}

message _alt_Array_lt_boolean_gt__comma__space_Array_lt_number_gt__comma__space_Array_lt_string_gt__agt_ {
    repeated boolean v0 = 1;
    repeated number v1 = 2;
    repeated string v2 = 3;
}`
);