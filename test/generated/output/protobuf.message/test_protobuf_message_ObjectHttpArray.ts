import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";

export const test_protobuf_message_ObjectHttpArray = _test_protobuf_message(
  "ObjectHttpArray",
)(
  'syntax = "proto3";\n\nmessage ObjectHttpArray {\n    repeated bool booleans = 1;\n    repeated int64 bigints = 2;\n    repeated double numbers = 3;\n    repeated string strings = 4;\n    repeated string templates = 5;\n}',
);
