import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_protobuf_message_ObjectSimple = _test_protobuf_message(
    "ObjectSimple",
    'syntax = "proto3";\n\nmessage ObjectSimple {\n    message IBox3D {\n        ObjectSimple.IPoint3D scale = 1;\n        ObjectSimple.IPoint3D position = 2;\n        ObjectSimple.IPoint3D rotate = 3;\n        ObjectSimple.IPoint3D pivot = 4;\n    }\n\n    message IPoint3D {\n        double x = 1;\n        double y = 2;\n        double z = 3;\n    }\n}',
);
