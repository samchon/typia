import typia from "../../../src";

import { ClassMethod } from "../../structures/ClassMethod";
import { _test_equals } from "../../internal/_test_equals";

export const test_equals_ClassMethod = _test_equals(
    "ClassMethod",
    ClassMethod.generate,
    (input) => typia.equals(input),
);
