import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_protobuf_message_ObjectLiteralProperty =
    _test_protobuf_message("ObjectLiteralProperty")(
        'syntax = "proto3";\n\nmessage ObjectLiteralProperty {\n    message ISomething {\n        requiredstring something-interesting-do-you-want? = 1;\n        requiredstring or-something-crazy-do-you-want? = 2;\n    }\n}',
    );
