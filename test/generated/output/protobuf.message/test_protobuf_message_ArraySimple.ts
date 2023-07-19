import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_protobuf_message_ArraySimple = _test_protobuf_message(
    "ArraySimple",
)(
    'syntax = "proto3";\n\nmessage ArraySimple {\n    message IPerson {\n        string name = 1;\n        string email = 2;\n        repeated ArraySimple.IHobby hobbies = 3;\n    }\n\n    message IHobby {\n        string name = 1;\n        string body = 2;\n        double rank = 3;\n    }\n}\n\nmessage __Main {\n    repeated ArraySimple.IPerson value = 1;\n}',
);
