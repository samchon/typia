import typia from "typia";

import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ClassPropertyAssignment = _test_validateClone(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => typia.validateClone(input),
    ClassPropertyAssignment.SPOILERS,
);
