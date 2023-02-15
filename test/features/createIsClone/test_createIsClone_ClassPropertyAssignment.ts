import typia from "typia";

import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ClassPropertyAssignment = _test_isClone(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    typia.createIsClone<ClassPropertyAssignment>(),
    ClassPropertyAssignment.SPOILERS,
);
