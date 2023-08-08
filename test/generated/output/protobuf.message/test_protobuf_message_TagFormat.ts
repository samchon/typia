import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagFormat } from "../../../structures/TagFormat";

export const test_protobuf_message_TagFormat = _test_protobuf_message(
    "TagFormat",
    'syntax = "proto3";\n\nmessage TagFormat {\n    string uuid = 1;\n    string email = 2;\n    string url = 3;\n    string ipv4 = 4;\n    string ipv6 = 5;\n    string date = 6;\n    string date_time = 7;\n    string datetime = 8;\n    string dateTime = 9;\n    string custom = 10;\n}',
);
