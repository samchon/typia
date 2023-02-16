import typia from "typia";

import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ClassPropertyAssignment = _test_assertStringify(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    typia.createAssertStringify<ClassPropertyAssignment>(),
    ClassPropertyAssignment.SPOILERS,
);
