import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_isStringify_ClassPropertyAssignment = _test_isStringify(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => typia.isStringify(input),
    ClassPropertyAssignment.SPOILERS,
);
