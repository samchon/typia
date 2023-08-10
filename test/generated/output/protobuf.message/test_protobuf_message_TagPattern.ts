import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagPattern } from "../../../structures/TagPattern";

export const test_protobuf_message_TagPattern = _test_protobuf_message(
    "TagPattern",
)(
    'syntax = "proto3";\n\nmessage TagPattern {\n    requiredstring uuid = 1;\n    requiredstring email = 2;\n    requiredstring ipv4 = 3;\n    requiredstring ipv6 = 4;\n}',
);
