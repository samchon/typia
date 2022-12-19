import typia from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_message } from "../internal/_test_message";

export const test_message_SetSimple = _test_message(
    "SetSimple",
    typia.message<SetSimple>(),
    `syntax = \"proto3\";

message SetSimple {
    repeated boolean booleans = 1;
    repeated number numbers = 2;
    repeated string strings = 3;
    repeated Set.Element_lt_Array_lt_number_gt__gt_ arrays = 4;
    repeated SetSimple.Person objects = 5;


    message Person {
        string id = 1;
        string name = 2;
        double age = 3;
    }
}

message Set {
    message Element_lt_Array_lt_number_gt__gt_ {
        repeated number value = 1;
    }
}`
);