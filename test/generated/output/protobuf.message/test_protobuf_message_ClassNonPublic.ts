import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_protobuf_message_ClassNonPublic = _test_protobuf_message(
  "ClassNonPublic",
)(
  'syntax = "proto3";\n\nmessage ClassNonPublic {\n    message Accessor {\n        required string implicit = 1;\n        required string shown = 2;\n    }\n}',
);
