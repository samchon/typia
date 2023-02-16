import typia from "typia";

import { ClassMethod } from "../../structures/ClassMethod";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ClassMethod = _test_validateStringify(
    "ClassMethod",
    ClassMethod.generate,
    (input) => typia.validateStringify(input),
    ClassMethod.SPOILERS,
);
