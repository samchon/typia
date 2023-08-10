import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_protobuf_message_ObjectNullable = _test_protobuf_message(
    "ObjectNullable",
)(
    'syntax = "proto3";\n\nmessage ObjectNullable {\n    repeated ObjectNullable.IProduct value = 1;\n    message IProduct {\n        requiredstring name = 1;\n        requiredObjectNullable.IManufacturer manufacturer = 2;\n        optional ObjectNullable.IBrand brand = 3;\n        oneof similar {\n            ObjectNullable.IBrand v1 = 4;\n            ObjectNullable.IManufacturer v2 = 5;\n        }\n    }\n\n    message IManufacturer {\n        requiredstring type = 1;\n        requiredstring name = 2;\n    }\n\n    message IBrand {\n        requiredstring type = 1;\n        requiredstring name = 2;\n    }\n}',
);
