import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_message } from "../internal/_test_message";

export const test_message_TagLength = _test_message(
    "TagLength",
    TSON.message<TagLength>(),
    `syntax = \"proto3\";

message TagLength {
    message Type {
        string fixed = 1;
        string greater = 2;
        string greater_equal = 3;
        string less = 4;
        string less_equal = 5;
        string greater_less = 6;
        string greater_equal_less = 7;
        string greater_less_equal = 8;
        string greater_equal_less_equal = 9;
        string minimum = 10;
        string maximum = 11;
        string minimum_and_maximum = 12;
    }
}

message __Main {
    repeated TagLength.Type value = 1;
}`,
);
