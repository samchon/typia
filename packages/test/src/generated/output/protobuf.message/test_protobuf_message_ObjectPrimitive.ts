import typia from "typia";

import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_protobuf_message_ObjectPrimitive = _test_protobuf_message(
  "ObjectPrimitive",
)(
  'syntax = "proto3";\n\nmessage ObjectPrimitive {\n    message IArticle {\n        required string id = 1;\n        required string extension = 2;\n        required string title = 3;\n        required string body = 4;\n        repeated ObjectPrimitive.IFile files = 5;\n        required bool secret = 6;\n        required string created_at = 7;\n    }\n\n    message IFile {\n        required string id = 1;\n        required string name = 2;\n        required string extension = 3;\n        required string url = 4;\n        required string created_at = 5;\n    }\n}',
);
