import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_assert_ClassPropertyAssignment = _test_assert(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => typia.assert<ClassPropertyAssignment>(input),
    ClassPropertyAssignment.SPOILERS,
);
