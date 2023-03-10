import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_message_ObjectRecursive = _test_message(
    "ObjectRecursive",
    'syntax = "proto3";\n\nmessage ObjectRecursive {\n    message IDepartment {\n        optional ObjectRecursive.IDepartment parent = 1;\n        double id = 2;\n        string code = 3;\n        string name = 4;\n        double sequence = 5;\n        ObjectRecursive.ITimestamp created_at = 6;\n    }\n\n    message ITimestamp {\n        double time = 1;\n        double zone = 2;\n    }\n}',
);
