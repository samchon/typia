import typia from "../../../src";

import { ClassMethod } from "../../structures/ClassMethod";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ClassMethod = _test_isStringify(
    "ClassMethod",
    ClassMethod.generate,
    (input) => typia.isStringify(input),
    ClassMethod.SPOILERS,
);
