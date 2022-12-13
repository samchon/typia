import typia from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ClassPropertyAssignment = _test_isStringify(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => typia.isStringify(input),
    ClassPropertyAssignment.SPOILERS,
);