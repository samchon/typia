import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createAssertClone_ClassPropertyAssignment = _test_assertClone(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    typia.createAssertClone<ClassPropertyAssignment>(),
    ClassPropertyAssignment.SPOILERS,
);
