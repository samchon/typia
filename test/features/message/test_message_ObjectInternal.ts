import typia from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectInternal = _test_message(
    "ObjectInternal",
    typia.message<ObjectInternal>(),
    `syntax = \"proto3\";

message ObjectInternal {
    string id = 1;
    string name = 2;
}`
);