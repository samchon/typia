import typia from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_message } from "../internal/_test_message";

export const test_message_TagMatrix = _test_message(
    "TagMatrix",
    typia.message<TagMatrix>(),
    `syntax = \"proto3\";

message TagMatrix {
    repeated Array.Element_lt_Array_lt_string_gt__gt_ matrix = 1;
}

message Array {
    message Element_lt_Array_lt_string_gt__gt_ {
        repeated string value = 1;
    }
}`
);