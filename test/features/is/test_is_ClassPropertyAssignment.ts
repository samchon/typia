import typia from "typia";

import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_is } from "../internal/_test_is";

export const test_is_ClassPropertyAssignment = _test_is(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => typia.is(input),
    ClassPropertyAssignment.SPOILERS,
);
