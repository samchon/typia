import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagPattern } from "../../../structures/TagPattern";

export const test_protobuf_message_TagPattern = _test_protobuf_message(
    "TagPattern",
)(
    'syntax = "proto3";\n\nmessage TagPattern {\n    required string uuid = 1;\n    required string email = 2;\n    required string ipv4 = 3;\n    required string ipv6 = 4;\n}',
);
