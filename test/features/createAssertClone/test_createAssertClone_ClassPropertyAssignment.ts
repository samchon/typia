import typia from "typia";

import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ClassPropertyAssignment = _test_assertClone(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    typia.createAssertClone<ClassPropertyAssignment>(),
    ClassPropertyAssignment.SPOILERS,
);
