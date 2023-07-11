import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_message_ObjectNullable = _test_message(
    "ObjectNullable",
    'syntax = "proto3";\n\nmessage ObjectNullable {\n    message IProduct {\n        string name = 1;\n        ObjectNullable.IManufacturer manufacturer = 2;\n        optional ObjectNullable.IBrand brand = 3;\n        oneof similar {\n            ObjectNullable.IBrand similar_o0 = 4;\n            ObjectNullable.IManufacturer similar_o1 = 5;\n        }\n    }\n\n    message IManufacturer {\n        string type = 1;\n        string name = 2;\n    }\n\n    message IBrand {\n        string type = 1;\n        string name = 2;\n    }\n}\n\nmessage __Main {\n    _alt_ObjectNullable.IProduct_comma__space_ObjectNullable.IProduct_comma__space_ObjectNullable.IProduct_agt_ value = 1;\n}\n\nmessage _alt_ObjectNullable {\n    message IProduct_comma__space_ObjectNullable {\n        message IProduct_comma__space_ObjectNullable {\n            message IProduct_agt_ {\n                ObjectNullable.IProduct v0 = 1;\n                ObjectNullable.IProduct v1 = 2;\n                ObjectNullable.IProduct v2 = 3;\n            }\n        }\n    }\n}',
);
