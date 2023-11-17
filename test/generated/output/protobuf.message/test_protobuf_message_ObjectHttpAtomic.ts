import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_protobuf_message_ObjectHttpAtomic = _test_protobuf_message(
  "ObjectHttpAtomic",
)(
  'syntax = "proto3";\n\nmessage ObjectHttpAtomic {\n    required bool boolean = 1;\n    required int64 bigint = 2;\n    required double number = 3;\n    required string string = 4;\n}',
);
