import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectIntersection = _test_message(
    "ObjectIntersection",
    TSON.message<ObjectIntersection>(),
    `syntax = \"proto3\";

message ObjectIntersection {
    string email = 1;
    string name = 2;
    bool vulnerable = 3;
}`,
);
