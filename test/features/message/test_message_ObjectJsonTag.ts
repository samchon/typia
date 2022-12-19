import typia from "../../../src";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectJsonTag = _test_message(
    "ObjectJsonTag",
    typia.message<ObjectJsonTag>(),
    `syntax = \"proto3\";

message ObjectJsonTag {
    string vulnerable = 1;
    string description = 2;
    string title = 3;
    string complicate_title = 4;
}`
);