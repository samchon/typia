import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_protobuf_message_DynamicSimple = _test_protobuf_message(
  "DynamicSimple",
)(
  'syntax = "proto3";\n\nmessage DynamicSimple {\n    map<string, double> value = 1;\n}',
);
