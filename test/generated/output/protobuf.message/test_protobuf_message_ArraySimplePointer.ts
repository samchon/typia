import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ArraySimplePointer } from "../../../structures/ArraySimplePointer";

export const test_protobuf_message_ArraySimplePointer = _test_protobuf_message(
    "ArraySimplePointer",
)(
    'syntax = "proto3";\n\nmessage ArraySimplePointer {\n    repeated ArraySimplePointer.IPerson value = 1;\n    message IPerson {\n        required string name = 1;\n        required string email = 2;\n        repeated ArraySimplePointer.IHobby hobbies = 3;\n    }\n\n    message IHobby {\n        required string name = 1;\n        required string body = 2;\n        required double rank = 3;\n    }\n}',
);
