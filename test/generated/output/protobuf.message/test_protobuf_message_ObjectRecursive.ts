import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_protobuf_message_ObjectRecursive = _test_protobuf_message(
    "ObjectRecursive",
)(
    'syntax = "proto3";\n\nmessage ObjectRecursive {\n    message IDepartment {\n        optional ObjectRecursive.IDepartment parent = 1;\n        required double id = 2;\n        required string code = 3;\n        required string name = 4;\n        required double sequence = 5;\n        required ObjectRecursive.ITimestamp created_at = 6;\n    }\n\n    message ITimestamp {\n        required double time = 1;\n        required double zone = 2;\n    }\n}',
);
