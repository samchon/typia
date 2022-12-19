import typia from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_message } from "../internal/_test_message";

export const test_message_ClassPropertyAssignment = _test_message(
    "ClassPropertyAssignment",
    typia.message<ClassPropertyAssignment>(),
    `syntax = \"proto3\";

message ClassPropertyAssignment {
    double id = 1;
    string name = 2;
    string note = 3;
    bool editable = 4;
    bool incremental = 5;
}`
);