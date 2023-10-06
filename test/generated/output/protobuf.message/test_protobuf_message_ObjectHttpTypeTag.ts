import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";

export const test_protobuf_message_ObjectHttpTypeTag = _test_protobuf_message(
    "ObjectHttpTypeTag",
)(
    'syntax = "proto3";\n\nmessage ObjectHttpTypeTag {\n    required int32 int32 = 1;\n    required uint64 uint64 = 2;\n    required string uuid = 3;\n    repeated double range = 4;\n    repeated string length = 5;\n}',
);
