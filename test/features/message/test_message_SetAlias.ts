import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_message } from "../internal/_test_message";

export const test_message_SetAlias = _test_message(
    "SetAlias",
    TSON.message<SetAlias>(),
    `syntax = \"proto3\";

message SetAlias {
    repeated boolean booleans = 1;
    repeated number numbers = 2;
    repeated string strings = 3;
    repeated Set.Element_lt_Array_lt_number_gt__gt_ arrays = 4;
    repeated SetAlias.Person objects = 5;


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
}`,
);
