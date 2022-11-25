import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ClassPropertyAssignment = _test_assert(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => TSON.assert(input),
    ClassPropertyAssignment.SPOILERS,
);