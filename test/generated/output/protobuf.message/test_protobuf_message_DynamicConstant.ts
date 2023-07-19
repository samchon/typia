import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_protobuf_message_DynamicConstant = _test_protobuf_message(
    "DynamicConstant",
)(
    'syntax = "proto3";\n\nmessage DynamicConstant {\n    double a = 1;\n    double b = 2;\n    double c = 3;\n    double d = 4;\n}',
);
