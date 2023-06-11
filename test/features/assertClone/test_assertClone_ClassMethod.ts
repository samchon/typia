import typia from "../../../src";

import { ClassMethod } from "../../structures/ClassMethod";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_assertClone_ClassMethod = _test_assertClone(
    "ClassMethod",
    ClassMethod.generate,
    (input) => typia.assertClone(input),
    ClassMethod.SPOILERS,
);
