import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_message } from "../internal/_test_message";

export const test_message_TagTuple = _test_message(
    "TagTuple",
    TSON.message<TagTuple>(),
    `syntax = \"proto3\";

message TagTuple {
    [string, number, Array<string>, Array<number>] tuple = 1;
}

message _alt_string_comma__space_number_comma__space_Array_lt_string_gt__comma__space_Array_lt_number_gt__agt_ {
    string v0 = 1;
    double v1 = 2;
    repeated string v2 = 3;
    repeated number v3 = 4;
}`,
);
