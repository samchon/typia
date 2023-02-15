import typia from "typia";

import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ClassPropertyAssignment = _test_clone(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => typia.clone(input),
);
