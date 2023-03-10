import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_message_ObjectLiteralProperty = _test_message(
    "ObjectLiteralProperty",
    'syntax = "proto3";\n\nmessage ObjectLiteralProperty {\n    message ISomething {\n        string v2 = 1;\n        string v3 = 2;\n    }\n}',
);
