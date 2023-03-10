import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_validateClone_ClassPropertyAssignment = _test_validateClone(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => typia.validateClone(input),
    ClassPropertyAssignment.SPOILERS,
);
