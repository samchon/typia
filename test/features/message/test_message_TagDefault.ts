import typia from "../../../src";
import { TagDefault } from "../../structures/TagDefault";
import { _test_message } from "../internal/_test_message";

export const test_message_TagDefault = _test_message(
    "TagDefault",
    typia.message<TagDefault>(),
    `syntax = \"proto3\";

message TagDefault {
    bool boolean = 1;
    double number = 2;
    string string = 3;
    string text = 4;
    oneof template {

    }
    oneof boolean_and_number_and_string {
        string o0 = 5;
        double o1 = 6;
        bool o2 = 7;
    }
    oneof union_but_boolean {
        string o0 = 8;
        double o1 = 9;
        bool o2 = 10;
    }
    oneof union_but_number {
        string o0 = 11;
        double o1 = 12;
        bool o2 = 13;
    }
    oneof union_but_string {
        string o0 = 14;
        double o1 = 15;
        bool o2 = 16;
    }
    double vulnerable_range = 17;
    oneof vulnerable_template {

    }
    oneof boolean_and_number_and_template {
        double o0 = 18;
        bool o1 = 19;
    }
}`
);