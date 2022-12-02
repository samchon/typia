import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_message } from "../internal/_test_message";

export const test_message_ClassGetter = _test_message(
    "ClassGetter",
    TSON.message<ClassGetter>(),
    `syntax = \"proto3\";

message ClassGetter {
    message Person {
        string id = 1;
        string name = 2;
        optional bool dead = 3;
    }
}`,
);
