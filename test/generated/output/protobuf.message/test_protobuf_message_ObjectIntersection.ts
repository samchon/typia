import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_protobuf_message_ObjectIntersection = _test_protobuf_message(
    "ObjectIntersection",
)(
    'syntax = "proto3";\n\nmessage ObjectIntersection {\n    requiredstring email = 1;\n    requiredstring name = 2;\n    requiredbool vulnerable = 3;\n}',
);
