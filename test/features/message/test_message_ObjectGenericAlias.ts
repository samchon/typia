import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectGenericAlias = _test_message(
    "ObjectGenericAlias",
    TSON.message<ObjectGenericAlias>(),
    `syntax = \"proto3\";

message ObjectGenericAlias {
    message Alias {
        string value = 1;
    }
}`,
);
