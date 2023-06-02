import typia from "../../../src";

import { ClassMethod } from "../../structures/ClassMethod";
import { _test_validateEquals } from "../../internal/_test_validateEquals";

export const test_validateEquals_ClassMethod = _test_validateEquals(
    "ClassMethod",
    ClassMethod.generate,
    (input) => typia.validateEquals(input),
);
