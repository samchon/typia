import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TypeTagType } from "../../../structures/TypeTagType";

export const test_protobuf_message_TypeTagType = _test_protobuf_message(
    "TypeTagType",
)(
    'syntax = "proto3";\n\nmessage TypeTagType {\n    repeated TypeTagType.Type value = 1;\n    message Type {\n        required int32 int = 1;\n        required uint32 uint = 2;\n        required int32 int32 = 3;\n        required uint32 uint32 = 4;\n        required int64 int64 = 5;\n        required uint64 uint64 = 6;\n        required float float = 7;\n    }\n}',
);
