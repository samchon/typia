import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_protobuf_message_ClassGetter = _test_protobuf_message(
    "ClassGetter",
)(
    'syntax = "proto3";\n\nmessage ClassGetter {\n    message Person {\n        required string id = 1;\n        required string name = 2;\n        optional bool dead = 3;\n    }\n}',
);
