import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectSimpleProtobuf } from "../../../structures/ObjectSimpleProtobuf";

export const test_protobuf_message_ObjectSimpleProtobuf =
    _test_protobuf_message("ObjectSimpleProtobuf")(
        'syntax = "proto3";\n\nmessage ObjectSimpleProtobuf {\n    required bool bool = 1;\n    required int32 int32 = 2;\n    required uint32 uint32 = 3;\n    required int64 int64 = 4;\n    required uint64 uint64 = 5;\n    required float float = 6;\n    required double double = 7;\n    required string string = 8;\n    required bytes bytes = 9;\n}',
    );
