import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_message_ClassGetter = _test_message(
    "ClassGetter",
    'syntax = "proto3";\n\nmessage ClassGetter {\n    message Person {\n        string id = 1;\n        string name = 2;\n        optional bool dead = 3;\n    }\n}',
);
