import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagFormat } from "../../../structures/TagFormat";

export const test_protobuf_message_TagFormat = _test_protobuf_message(
    "TagFormat",
)(
    'syntax = "proto3";\n\nmessage TagFormat {\n    required string uuid = 1;\n    required string email = 2;\n    required string url = 3;\n    required string ipv4 = 4;\n    required string ipv6 = 5;\n    required string date = 6;\n    required string date_time = 7;\n    required string datetime = 8;\n    required string dateTime = 9;\n    required string custom = 10;\n}',
);
