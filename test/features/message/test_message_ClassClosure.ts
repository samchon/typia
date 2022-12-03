import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_message } from "../internal/_test_message";

export const test_message_ClassClosure = _test_message(
    "ClassClosure",
    TSON.message<ClassClosure>(),
    `syntax = \"proto3\";

message ClassClosure {
    message Something {
        string id = 1;
        string type = 2;
        oneof closure {
    
        }
    }
}`,
);
