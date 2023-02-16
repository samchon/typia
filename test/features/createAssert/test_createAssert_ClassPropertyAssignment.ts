import typia from "typia";

import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ClassPropertyAssignment = _test_assert(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    typia.createAssert<ClassPropertyAssignment>(),
    ClassPropertyAssignment.SPOILERS,
);
