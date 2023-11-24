import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_protobuf_message_ObjectPartial = _test_protobuf_message(
  "ObjectPartial",
)(
  'syntax = "proto3";\n\nmessage Partial_lt_ObjectPartial {\n    message IBase_gt_ {\n        optional bool boolean = 1;\n        optional double number = 2;\n        optional string string = 3;\n        repeated double array = 4;\n        optional ObjectPartial.IBase object = 5;\n    }\n}\n\nmessage ObjectPartial {\n    message IBase {\n        required bool boolean = 1;\n        required double number = 2;\n        required string string = 3;\n        repeated double array = 4;\n        optional ObjectPartial.IBase object = 5;\n    }\n}',
);
