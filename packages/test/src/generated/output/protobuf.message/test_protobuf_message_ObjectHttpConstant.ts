import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_protobuf_message_ObjectHttpConstant = _test_protobuf_message(
  "ObjectHttpConstant",
)(
  'syntax = "proto3";\n\nmessage ObjectHttpConstant {\n    required bool boolean = 1;\n    required uint64 bigint = 2;\n    required int32 number = 3;\n    required string string = 4;\n    required string template = 5;\n}',
);
