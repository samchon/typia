import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagCustom } from "../../../structures/TagCustom";

export const test_protobuf_message_TagCustom = _test_protobuf_message(
    "TagCustom",
)(
    'syntax = "proto3";\n\nmessage TagCustom {\n    requiredstring id = 1;\n    requiredstring dollar = 2;\n    requiredstring postfix = 3;\n    requireddouble log = 4;\n}',
);
