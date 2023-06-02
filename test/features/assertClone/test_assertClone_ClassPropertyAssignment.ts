import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_assertClone_ClassPropertyAssignment = _test_assertClone(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => typia.assertClone(input),
    ClassPropertyAssignment.SPOILERS,
);
