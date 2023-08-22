import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagBigInt } from "../../../structures/TagBigInt";

export const test_protobuf_message_TagBigInt = _test_protobuf_message(
    "TagBigInt",
)(
    'syntax = "proto3";\n\nmessage TagBigInt {\n    required int64 value = 1;\n    required int64 ranged = 2;\n    required int64 minimum = 3;\n    required int64 maximum = 4;\n    required int64 multipleOf = 5;\n}',
);
