import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_message_ArrayRecursive = _test_message(
    "ArrayRecursive",
    'syntax = "proto3";\n\nmessage ArrayRecursive {\n    message ICategory {\n        repeated ArrayRecursive.ICategory children = 1;\n        double id = 2;\n        string code = 3;\n        double sequence = 4;\n        ArrayRecursive.ITimestamp created_at = 5;\n    }\n\n    message ITimestamp {\n        double time = 1;\n        double zone = 2;\n    }\n}',
);
