import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagLength } from "../../../structures/TagLength";

export const test_protobuf_message_TagLength = _test_protobuf_message(
    "TagLength",
)(
    'syntax = "proto3";\n\nmessage TagLength {\n    repeated TagLength.Type value = 1;\n    message Type {\n        requiredstring fixed = 1;\n        requiredstring minimum = 2;\n        requiredstring maximum = 3;\n        requiredstring minimum_and_maximum = 4;\n    }\n}',
);
