import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagFormat } from "../../../structures/TagFormat";

export const test_protobuf_message_TagFormat = _test_protobuf_message(
    "TagFormat",
)(
    'syntax = "proto3";\n\nmessage TagFormat {\n    requiredstring uuid = 1;\n    requiredstring email = 2;\n    requiredstring url = 3;\n    requiredstring ipv4 = 4;\n    requiredstring ipv6 = 5;\n    requiredstring date = 6;\n    requiredstring date_time = 7;\n    requiredstring datetime = 8;\n    requiredstring dateTime = 9;\n    requiredstring custom = 10;\n}',
);
