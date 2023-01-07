import typia from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ClassPropertyAssignment = _test_validateEquals(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => typia.validateEquals(input),
);