import typia from "../../../src";

import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ClassPropertyAssignment = _test_assertEquals(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => typia.assertEquals(input),
);
