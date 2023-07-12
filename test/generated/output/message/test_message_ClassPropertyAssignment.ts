import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_message_ClassPropertyAssignment = _test_message(
    "ClassPropertyAssignment",
    'syntax = "proto3";\n\nmessage ClassPropertyAssignment {\n    double id = 1;\n    string name = 2;\n    string note = 3;\n    bool editable = 4;\n    bool incremental = 5;\n}',
);