import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagCustom } from "../../../structures/TagCustom";

export const test_protobuf_message_TagCustom = _test_protobuf_message(
    "TagCustom",
)(
    'syntax = "proto3";\n\nmessage TagCustom {\n    required string id = 1;\n    required string dollar = 2;\n    required string postfix = 3;\n    required double log = 4;\n}',
);
