import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_protobuf_message_ObjectSimple = _test_protobuf_message(
    "ObjectSimple",
)(
    'syntax = "proto3";\n\nmessage ObjectSimple {\n    message IBox3D {\n        requiredObjectSimple.IPoint3D scale = 1;\n        requiredObjectSimple.IPoint3D position = 2;\n        requiredObjectSimple.IPoint3D rotate = 3;\n        requiredObjectSimple.IPoint3D pivot = 4;\n    }\n\n    message IPoint3D {\n        requireddouble x = 1;\n        requireddouble y = 2;\n        requireddouble z = 3;\n    }\n}',
);
