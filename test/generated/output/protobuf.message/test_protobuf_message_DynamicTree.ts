import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_protobuf_message_DynamicTree = _test_protobuf_message(
    "DynamicTree",
)(
    'syntax = "proto3";\n\nmessage DynamicTree {\n    requiredstring id = 1;\n    requireddouble sequence = 2;\n    requiredmap<string, DynamicTree> children = 3;\n}',
);