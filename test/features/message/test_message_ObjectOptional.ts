import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectOptional = _test_message(
    "ObjectOptional",
    TSON.message<ObjectOptional>(),
    `syntax = \"proto3\";

message ObjectOptional {
    optional string id = 1;
    optional string name = 2;
    optional string email = 3;
    optional double sequence = 4;
}`,
);
