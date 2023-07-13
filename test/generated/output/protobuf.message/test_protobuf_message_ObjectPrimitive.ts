import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_protobuf_message_ObjectPrimitive = _test_protobuf_message(
    "ObjectPrimitive",
    'syntax = "proto3";\n\nmessage ObjectPrimitive {\n    message IArticle {\n        string id = 1;\n        string extension = 2;\n        string title = 3;\n        string body = 4;\n        repeated ObjectPrimitive.IFile files = 5;\n        bool secret = 6;\n        string created_at = 7;\n    }\n\n    message IFile {\n        string id = 1;\n        string name = 2;\n        string extension = 3;\n        string url = 4;\n        string created_at = 5;\n    }\n}',
);
