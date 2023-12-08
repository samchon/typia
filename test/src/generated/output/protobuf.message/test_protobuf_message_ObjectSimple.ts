import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_protobuf_message_ObjectSimple = _test_protobuf_message(
  "ObjectSimple",
)(
  'syntax = "proto3";\n\nmessage ObjectSimple {\n    message IBox3D {\n        required ObjectSimple.IPoint3D scale = 1;\n        required ObjectSimple.IPoint3D position = 2;\n        required ObjectSimple.IPoint3D rotate = 3;\n        required ObjectSimple.IPoint3D pivot = 4;\n    }\n\n    message IPoint3D {\n        required double x = 1;\n        required double y = 2;\n        required double z = 3;\n    }\n}',
);
