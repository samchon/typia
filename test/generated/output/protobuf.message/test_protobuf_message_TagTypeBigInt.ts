import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TagTypeBigInt } from "../../../structures/TagTypeBigInt";

export const test_protobuf_message_TagTypeBigInt = _test_protobuf_message(
    "TagTypeBigInt",
)(
    'syntax = "proto3";\n\nmessage TagTypeBigInt {\n    required int64 in64 = 1;\n    required uint64 uint64 = 2;\n}',
);
