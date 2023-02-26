import typia from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ClassPropertyAssignment = _test_assertClone(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => typia.assertClone(input),
    ClassPropertyAssignment.SPOILERS,
);
