import typia from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectClosure = _test_message(
    "ObjectClosure",
    typia.message<ObjectClosure>(),
    `syntax = \"proto3\";

message ObjectClosure {
    message IRecord {
        string id = 1;
        oneof open {
    
        }
    }
}`
);