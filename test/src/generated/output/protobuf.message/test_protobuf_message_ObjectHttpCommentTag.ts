import typia from "typia";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
export const test_protobuf_message_ObjectHttpCommentTag =
  _test_protobuf_message("ObjectHttpCommentTag")(
    'syntax = "proto3";\n\nmessage ObjectHttpCommentTag {\n  required int32 int = 1;\n  required uint64 uint64 = 2;\n  required string uuid = 3;\n  repeated double items = 4;\n}',
  );
