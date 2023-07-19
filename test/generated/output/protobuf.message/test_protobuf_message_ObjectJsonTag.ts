import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_protobuf_message_ObjectJsonTag = _test_protobuf_message(
    "ObjectJsonTag",
)(
    'syntax = "proto3";\n\nmessage ObjectJsonTag {\n    string vulnerable = 1;\n    string description = 2;\n    string title = 3;\n    string complicate_title = 4;\n}',
);
