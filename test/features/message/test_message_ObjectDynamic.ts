import TSON from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectDynamic = _test_message(
    "ObjectDynamic",
    TSON.message<ObjectDynamic>(),
    `syntax = \"proto3\";

message ObjectDynamic {
}`,
);
