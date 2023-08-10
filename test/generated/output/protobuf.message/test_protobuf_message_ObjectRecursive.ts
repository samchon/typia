import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_protobuf_message_ObjectRecursive = _test_protobuf_message(
    "ObjectRecursive",
)(
    'syntax = "proto3";\n\nmessage ObjectRecursive {\n    message IDepartment {\n        optional ObjectRecursive.IDepartment parent = 1;\n        requireddouble id = 2;\n        requiredstring code = 3;\n        requiredstring name = 4;\n        requireddouble sequence = 5;\n        requiredObjectRecursive.ITimestamp created_at = 6;\n    }\n\n    message ITimestamp {\n        requireddouble time = 1;\n        requireddouble zone = 2;\n    }\n}',
);
