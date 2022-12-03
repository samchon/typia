import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_message } from "../internal/_test_message";

export const test_message_ClassMethod = _test_message(
    "ClassMethod",
    TSON.message<ClassMethod>(),
    `syntax = \"proto3\";

message ClassMethod {
    message Animal {
        string name = 1;
        double age = 2;
    }
}`,
);
