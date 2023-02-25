import typia from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ClassPropertyAssignment = _test_equals(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    typia.createEquals<ClassPropertyAssignment>(),
);
