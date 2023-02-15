import typia from "typia";

import { ClassMethod } from "../../structures/ClassMethod";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ClassMethod = _test_stringify(
    "ClassMethod",
    ClassMethod.generate,
    (input) => typia.stringify(input),
);
