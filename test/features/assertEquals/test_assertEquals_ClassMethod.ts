import typia from "typia";

import { ClassMethod } from "../../structures/ClassMethod";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ClassMethod = _test_assertEquals(
    "ClassMethod",
    ClassMethod.generate,
    (input) => typia.assertEquals(input),
);
