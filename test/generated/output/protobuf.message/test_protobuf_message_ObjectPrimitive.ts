import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_protobuf_message_ObjectPrimitive = _test_protobuf_message(
    "ObjectPrimitive",
)(
    'syntax = "proto3";\n\nmessage ObjectPrimitive {\n    message IArticle {\n        requiredstring id = 1;\n        requiredstring extension = 2;\n        requiredstring title = 3;\n        requiredstring body = 4;\n        repeated ObjectPrimitive.IFile files = 5;\n        requiredbool secret = 6;\n        requiredstring created_at = 7;\n    }\n\n    message IFile {\n        requiredstring id = 1;\n        requiredstring name = 2;\n        requiredstring extension = 3;\n        requiredstring url = 4;\n        requiredstring created_at = 5;\n    }\n}',
);
