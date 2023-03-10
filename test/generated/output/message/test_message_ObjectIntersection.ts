import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_message_ObjectIntersection = _test_message(
    "ObjectIntersection",
    'syntax = "proto3";\n\nmessage ObjectIntersection {\n    string email = 1;\n    string name = 2;\n    bool vulnerable = 3;\n}',
);
